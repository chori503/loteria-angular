import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CardInfoDto } from '../../dto/CardInfoDto';
import LoteriaData from '../../LoteriaData.json';
import LoteriaTables from '../../LoteriaTables.json';
import { NzSelectItemInterface } from 'ng-zorro-antd/select';

const CARDS_PATH = './assets/img/cards/';
const CELEBRATION_GIF = './assets/img/celebrate3.gif';
const SETTINGS_KEY = 'loteria.ajustes';

interface LoteriaTable {
  id: number;
  cardIds: number[];
}

interface Settings {
  maxTime: number;
  voiceEnabled: boolean;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class IndexComponent implements OnInit, OnDestroy {

  constructor() {
  }
  isAppLoading = true;
  imagesLoaded = 0;
  totalImages = 0;
  isCelebrating = false;
  loteriaScript = ""
  i = 0;
  isModalSettingsVisible = false;
  startGame = false;
  finishedGame = false;
  modalVisible = false;
  isModalLoading = false;
  randomCards = this.randomizedCards(LoteriaData);
  //tablas de loteria
  loteriaTables: LoteriaTable[] = LoteriaTables;
  totalTables = LoteriaTables.length;
  discoveredCards: CardInfoDto[] = [];
  // Cartas que ya salieron antes de la actual, la más reciente primero
  previousCards: CardInfoDto[] = [];
  // Cuántas cartas se han mostrado en la partida (incluida la actual)
  shownCount = 0;
  cardNameSelected = "";
  cardImgNameSelected = "";
  // imageName -> URL en memoria (blob:) de cada carta precargada
  cardImageUrls: { [imageName: string]: string } = {};
  celebrationImageUrl = CELEBRATION_GIF;
  private objectUrls: string[] = [];
  // Mantiene vivas las imágenes decodificadas para que el navegador no las descarte
  private decodedImages: HTMLImageElement[] = [];
  private cardsById = new Map<number, CardInfoDto>(LoteriaData.map(card => [card.id as number, card]));

  // Ajustes (se guardan en el navegador entre partidas)
  maxTime: number = 5;
  readonly minTime = 1;
  readonly maxTimeLimit = 30;
  voiceEnabled = false;
  readonly voiceSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  private settingsSnapshot: Settings | null = null;

  percent: number = 0;
  seconds = 0;
  // Segundo que se muestra en el círculo (sigue en maxTime mientras se espera la siguiente carta)
  displaySeconds = 0;
  end = 'Tiempo expirado';
  isPaused = false;
  private isRunning = false;
  private interval: any;
  private tickTimeout: any;
  // Milisegundos ya transcurridos del segundo actual: al pausar no se pierden
  private elapsedInSecond = 0;
  private currentScript = '';
  // Animación fluida del círculo: momento del último tick y frame pendiente
  private tickStartedAt = 0;
  private animationFrame = 0;

  tableResults: { [key: number]: boolean | null } = {};
  // Tablero que se está revisando en el modal, con cada carta marcada si ya salió
  selectedTable: { id: number; cards: { card: CardInfoDto; found: boolean }[]; missing: number } | null = null;

  ngOnInit() {
    this.loadSettings();
    // Chrome carga las voces de forma asíncrona: se piden desde el inicio para tenerlas listas
    if (this.voiceSupported) {
      window.speechSynthesis.getVoices();
    }
    this.preloadImages(this.randomCards);
    this.showCardPreview();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.repeat || this.isAppLoading) {
      return;
    }
    // Con un modal abierto o escribiendo en un campo, las teclas funcionan normal
    if (this.modalVisible || this.isModalSettingsVisible || isTypingTarget(event.target)) {
      return;
    }
    const inGame = this.startGame && !this.finishedGame;

    // P: pausa / reanuda
    if (event.code === 'KeyP' && inGame) {
      event.preventDefault();
      this.togglePause();
      return;
    }
    // Barra espaciadora: presiona el botón principal de la pantalla actual
    // (Comenzar juego, ¡Lotería! o Volver a jugar)
    if (event.code === 'Space') {
      // Evita el scroll y que un botón con foco también reciba el "click" del espacio
      event.preventDefault();
      if (!this.startGame) {
        this.funStartGame();
      } else if (this.finishedGame) {
        this.resetGame();
      } else {
        this.showModal();
      }
    }
  }

  @ViewChild('maxTimeInput') maxTimeInput?: ElementRef<HTMLButtonElement>;
  focusMaxTimeInput(): void {
    setTimeout(() => {
      this.maxTimeInput?.nativeElement.focus();
    });
  }
  // Descarga cada imagen una sola vez y la guarda en memoria como Blob.
  // Las cartas se muestran con esa URL local (blob:), así que no se vuelven a pedir a la red.
  async preloadImages(cards: CardInfoDto[]): Promise<void> {
    this.totalImages = cards.length;
    this.imagesLoaded = 0;

    await Promise.all(cards.map(async card => {
      const imageName = card.imageName as string;
      try {
        this.cardImageUrls[imageName] = await this.loadInMemory(CARDS_PATH + imageName);
      } catch {
        // Evita que una imagen rota bloquee la app; se usará la ruta original
      }
      this.imagesLoaded++;
    }));

    this.isAppLoading = false;
    console.log('Imágenes precargadas');

    // El gif de celebración es pesado: se descarga en segundo plano sin bloquear el inicio
    this.loadInMemory(CELEBRATION_GIF)
      .then(url => this.celebrationImageUrl = url)
      .catch(() => { });
  }
  private async loadInMemory(path: string): Promise<string> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`No se pudo cargar ${path}`);
    }
    const url = URL.createObjectURL(await response.blob());
    this.objectUrls.push(url);
    // Decodifica la imagen en segundo plano para que se pinte al instante.
    // No se espera: decode() puede quedar pendiente si la pestaña no está visible.
    const img = new Image();
    img.src = url;
    img.decode().catch(() => { });
    this.decodedImages.push(img);
    return url;
  }
  getCardImageUrl(imageName: string | undefined): string {
    if (!imageName) {
      return '';
    }
    return this.cardImageUrls[imageName] ?? CARDS_PATH + imageName;
  }
  ngOnDestroy(): void {
    this.killTimer();
    this.stopSpeaking();
    this.objectUrls.forEach(url => URL.revokeObjectURL(url));
    this.decodedImages = [];
  }

  // =========================
  // TEMPORIZADOR
  // =========================

  // Arranca o reanuda el conteo, continuando desde la fracción de segundo donde se detuvo
  startTimer(): void {
    if (!this.startGame || this.finishedGame || this.isPaused || this.isRunning) {
      return;
    }
    this.isRunning = true;
    const elapsed = this.elapsedInSecond;
    this.tickStartedAt = performance.now() - elapsed;
    this.animateProgress();
    this.tickTimeout = setTimeout(() => {
      this.tick();
      this.interval = setInterval(() => this.tick(), 1000);
    }, 1000 - elapsed);
  }
  // Detiene el conteo guardando cuánto llevaba del segundo actual
  killTimer() {
    if (this.isRunning) {
      this.elapsedInSecond = Math.min(performance.now() - this.tickStartedAt, 999);
    }
    this.isRunning = false;
    clearTimeout(this.tickTimeout);
    clearInterval(this.interval);
    cancelAnimationFrame(this.animationFrame);
  }
  private tick(): void {
    // Cada carta dura exactamente maxTime segundos; la siguiente aparece en el próximo tick
    if (this.seconds >= this.maxTime) {
      this.i++;
      this.seconds = 0;
      if (this.i >= this.randomCards.length) {
        this.killTimer();
        this.elapsedInSecond = 0;
        return;
      }
    }
    const card = this.randomCards[this.i];
    if (this.seconds === 0) {
      this.onNewCard(card);
    }
    this.seconds++;
    this.displaySeconds = this.seconds;
    this.tickStartedAt = performance.now();
  }
  private onNewCard(card: CardInfoDto): void {
    if (this.i > 0) {
      this.previousCards = [this.randomCards[this.i - 1], ...this.previousCards];
    }
    this.shownCount = this.i + 1;
    this.currentScript = pickRandom(card.script) ?? '';
    this.cardNameSelected = card.name as string;
    this.cardImgNameSelected = card.imageName as string;
    this.loteriaScript = this.currentScript;
    this.speak(stripHtml(this.currentScript) || (card.name as string));
  }
  // Muestra la primera carta (sin verso) mientras arranca el primer segundo
  private showCardPreview(): void {
    const card = this.randomCards[0];
    this.cardNameSelected = card.name as string;
    this.cardImgNameSelected = card.imageName as string;
    this.loteriaScript = '';
  }
  // Mueve el círculo en cada frame: durante el segundo N avanza de (N-1)/maxTime a N/maxTime,
  // así se llena justo cuando cambia la carta en lugar de saltar una vez por segundo.
  private animateProgress(): void {
    cancelAnimationFrame(this.animationFrame);
    const step = () => {
      const fraction = Math.min((performance.now() - this.tickStartedAt) / 1000, 1);
      const progress = (this.displaySeconds - 1 + fraction) / this.maxTime;
      this.percent = Math.min(Math.max(progress, 0), 1) * 100;
      this.animationFrame = requestAnimationFrame(step);
    };
    this.animationFrame = requestAnimationFrame(step);
  }
  togglePause(): void {
    if (!this.startGame || this.finishedGame) {
      return;
    }
    if (this.isPaused) {
      this.isPaused = false;
      this.startTimer();
    } else {
      this.isPaused = true;
      this.killTimer();
      this.stopSpeaking();
    }
  }
  randomizedCards(c: CardInfoDto[]) {
    return c.sort(() => Math.random() - 0.5);
  }
  formatProgressBarToSeconds = (): string =>
    this.displaySeconds <= 1 ? `${this.displaySeconds} Seg` : `${this.displaySeconds} Segs`;

  // =========================
  // VOZ: canta el verso de cada carta
  // =========================
  private speak(text: string): void {
    if (!this.voiceEnabled || !this.voiceSupported || !text) {
      return;
    }
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickLatinVoice(synth.getVoices());
    utterance.voice = voice;
    utterance.lang = voice?.lang ?? 'es-MX';
    synth.speak(utterance);
  }
  private stopSpeaking(): void {
    if (this.voiceSupported) {
      window.speechSynthesis.cancel();
    }
  }

  // =========================
  // MODAL ¡LOTERÍA!
  // =========================
  showModal(): void {
    this.modalVisible = true;
    this.tableResults = {};
    this.selectedTable = null;
    this.killTimer();
    this.stopSpeaking();
    this.discoveredCards = this.randomCards.slice(0, this.shownCount);
  }
  evaluateTable(table: LoteriaTable): void {
    const discoveredIds = new Set(this.discoveredCards.map(c => c.id));
    const cards = table.cardIds
      .map(id => this.cardsById.get(id))
      .filter((card): card is CardInfoDto => !!card)
      .map(card => ({ card, found: discoveredIds.has(card.id) }));
    const missing = cards.filter(c => !c.found).length;
    this.tableResults[table.id] = missing === 0;
    this.selectedTable = { id: table.id, cards, missing };
  }
  // Busca sin importar acentos ni mayúsculas: "arbol" encuentra "El Árbol"
  filterCardOption = (input: string, option: NzSelectItemInterface): boolean =>
    normalizeText(String(option.nzLabel ?? '')).includes(normalizeText(input));

  handleOk(): void {
    this.isCelebrating = true;
    this.isModalLoading = true;
    setTimeout(() => {
      this.modalVisible = false;
      this.isModalLoading = false;
    }, 3000);
    this.finishedGame = true;
    this.killTimer();
    this.stopSpeaking();
  }
  funStartGame(): void {
    this.startGame = true;
    this.finishedGame = false;
    this.isPaused = false;
    this.startTimer();
  }
  handleCancel(): void {
    this.modalVisible = false;
    this.startTimer();
  }
  resetGame() {
    this.killTimer();
    this.stopSpeaking();
    this.isCelebrating = false;
    this.isPaused = false;
    this.i = 0;
    this.seconds = 0;
    this.displaySeconds = 0;
    this.percent = 0;
    this.elapsedInSecond = 0;
    this.shownCount = 0;
    this.previousCards = [];
    this.discoveredCards = [];
    this.selectedTable = null;
    this.randomCards = this.randomizedCards(LoteriaData);
    this.finishedGame = false;
    this.modalVisible = false;
    this.showCardPreview();
    this.startTimer();
  }

  // =========================
  // AJUSTES
  // =========================
  showSettingsModal() {
    this.killTimer();
    this.stopSpeaking();
    this.settingsSnapshot = { maxTime: this.maxTime, voiceEnabled: this.voiceEnabled };
    this.isModalSettingsVisible = true;
  }
  settingModalOk() {
    this.saveSettings();
    this.closeSettings();
  }
  settingModalCancel() {
    // Descarta los cambios no guardados
    if (this.settingsSnapshot) {
      this.maxTime = this.settingsSnapshot.maxTime;
      this.voiceEnabled = this.settingsSnapshot.voiceEnabled;
    }
    this.closeSettings();
  }
  changeMaxTime(delta: number): void {
    this.maxTime = Math.min(Math.max(this.maxTime + delta, this.minTime), this.maxTimeLimit);
  }
  private closeSettings() {
    this.settingsSnapshot = null;
    this.isModalSettingsVisible = false;
    this.startTimer();
  }
  private loadSettings(): void {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? 'null') as Partial<Settings> | null;
      if (typeof saved?.maxTime === 'number' && saved.maxTime >= this.minTime && saved.maxTime <= this.maxTimeLimit) {
        this.maxTime = saved.maxTime;
      }
      if (typeof saved?.voiceEnabled === 'boolean') {
        this.voiceEnabled = saved.voiceEnabled;
      }
    } catch {
      // Sin acceso al almacenamiento (modo privado, etc.): se usan los valores por defecto
    }
  }
  private saveSettings(): void {
    try {
      const settings: Settings = { maxTime: this.maxTime, voiceEnabled: this.voiceEnabled };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // Si no se puede guardar, los ajustes duran solo esta sesión
    }
  }
}

function isTypingTarget(target: EventTarget | null): boolean {
  const element = target as HTMLElement | null;
  return !!element && (element.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName));
}

// Quita acentos y pasa a minúsculas para comparar textos
function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// Prefiere voces latinas: México, Estados Unidos (latino), Latinoamérica y luego cualquier otro
// país hispanohablante. La de España (es-ES) solo si no hay otra.
const LATIN_VOICE_PRIORITY = ['es-mx', 'es-us', 'es-419'];
export function pickLatinVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const spanish = voices.filter(v => v.lang.toLowerCase().replace('_', '-').startsWith('es'));
  const rank = (voice: SpeechSynthesisVoice): number => {
    const lang = voice.lang.toLowerCase().replace('_', '-');
    const index = LATIN_VOICE_PRIORITY.indexOf(lang);
    if (index >= 0) {
      return index;
    }
    return lang === 'es-es' || lang === 'es' ? LATIN_VOICE_PRIORITY.length + 1 : LATIN_VOICE_PRIORITY.length;
  };
  return spanish.sort((a, b) => rank(a) - rank(b))[0] ?? null;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function pickRandom<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[Math.floor(Math.random() * items.length)] : undefined;
}
