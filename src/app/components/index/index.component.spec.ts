import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { IndexComponent, pickLatinVoice } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  const press = (code: string) => document.dispatchEvent(new KeyboardEvent('keydown', { code, cancelable: true }));

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => component.killTimer());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the first card on init', () => {
    expect(component.cardNameSelected).not.toBe('');
  });

  it('should show which cards of a table came out and which are missing', () => {
    const table = component.loteriaTables[0];
    const [first, second] = table.cardIds;
    component.discoveredCards = [{ id: first }, { id: second }] as any;
    component.evaluateTable(table);

    expect(component.tableResults[table.id]).toBe(false);
    expect(component.selectedTable?.cards.length).toBe(16);
    expect(component.selectedTable?.missing).toBe(14);

    component.discoveredCards = table.cardIds.map(id => ({ id })) as any;
    component.evaluateTable(table);
    expect(component.tableResults[table.id]).toBe(true);
    expect(component.selectedTable?.missing).toBe(0);
  });

  it('should press the main button of each screen with the Space key', () => {
    component.isAppLoading = false;

    press('Space');
    expect(component.startGame).toBe(true);

    press('Space');
    expect(component.modalVisible).toBe(true);

    // Con el modal abierto, Espacio no hace nada
    component.finishedGame = true;
    press('Space');
    expect(component.i).toBe(0);

    component.modalVisible = false;
    press('Space');
    expect(component.finishedGame).toBe(false);
  });

  it('should pause and resume with the P key only while playing', () => {
    component.isAppLoading = false;
    press('KeyP');
    expect(component.isPaused).toBe(false);

    component.funStartGame();
    press('KeyP');
    expect(component.isPaused).toBe(true);

    // Cerrar un modal no reanuda si el jugador pausó
    component.showModal();
    component.handleCancel();
    expect(component.isPaused).toBe(true);

    press('KeyP');
    expect(component.isPaused).toBe(false);
  });

  it('should search cards ignoring accents and case', () => {
    const option = { nzLabel: 'El Árbol' } as any;
    expect(component.filterCardOption('arbol', option)).toBe(true);
    expect(component.filterCardOption('ÁRB', option)).toBe(true);
    expect(component.filterCardOption('gallo', option)).toBe(false);
  });

  it('should keep the seconds per card between 1 and 30', () => {
    component.maxTime = 1;
    component.changeMaxTime(-1);
    expect(component.maxTime).toBe(1);

    component.maxTime = 30;
    component.changeMaxTime(1);
    expect(component.maxTime).toBe(30);
  });

  it('should save settings on accept and discard them on cancel', () => {
    expect(component.voiceEnabled).toBe(false);

    component.showSettingsModal();
    component.changeMaxTime(3);
    component.voiceEnabled = true;
    component.settingModalOk();
    expect(JSON.parse(localStorage.getItem('loteria.ajustes')!)).toEqual({ maxTime: 8, voiceEnabled: true });

    component.showSettingsModal();
    component.changeMaxTime(5);
    component.settingModalCancel();
    expect(component.maxTime).toBe(8);

    // Una nueva partida carga los ajustes guardados
    const other = TestBed.createComponent(IndexComponent);
    other.detectChanges();
    expect(other.componentInstance.maxTime).toBe(8);
    expect(other.componentInstance.voiceEnabled).toBe(true);
    other.componentInstance.killTimer();
  });

  it('should prefer a Latin American Spanish voice over the Spain one', () => {
    const voice = (lang: string) => ({ lang, name: lang }) as SpeechSynthesisVoice;
    const spain = voice('es-ES');
    const us = voice('es-US');
    const mexico = voice('es-MX');

    expect(pickLatinVoice([spain, us])).toBe(us);
    expect(pickLatinVoice([spain, us, mexico])).toBe(mexico);
    expect(pickLatinVoice([spain, voice('es-AR')])?.lang).toBe('es-AR');
    expect(pickLatinVoice([spain, voice('en-US')])).toBe(spain);
    expect(pickLatinVoice([voice('en-US')])).toBeNull();
  });
});
