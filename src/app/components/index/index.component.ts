import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardInfoDto } from 'src/app/dto/CardInfoDto';
import LoteriaData from 'src/app/LoteriaData.json';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  constructor() {
  }
  loteriaScript = ""
  i = 0;
  startGame = false;
  finishedGame = false;
  modalVisible = false;
  isModalLoading = false;
  randomCards = this.randomizedCards(LoteriaData);
  discoveredCards: CardInfoDto[] = [];
  cardNameSelected = "";
  cardImgNameSelected = "";
  maxTime: number = 5;
  percent: number = 0;
  seconds = 0;
  end = 'Tiempo expirado';
  interval: any;
  ngOnInit() {
    //this.startTimer();
    console.log("NORMAL");
    //console.log(this.initializeCards());
    console.log("-----------------");
    console.log("RANDOMMMMMMMMMMMMMMMMMMMMMMMM");
    //this.randomizedCards(this.initializeCards());
    console.log(this.randomCards);
    if (this.i == 0) {
      this.cardNameSelected = this.randomCards[this.i].name as string;
      this.cardImgNameSelected = "/assets/img/cards/" + this.randomCards[this.i].imageName as string;
      const indexScript = randomIntFromInterval(0, this.randomCards[this.i].script.length > 0 ? this.randomCards[this.i].script.length - 1 : this.randomCards[this.i].script.length);
      console.log("--------------------------------------")
      console.log("Index Script: " + indexScript)
      this.loteriaScript = this.randomCards[this.i].script[indexScript]
      console.log("Loteria Script: " + this.loteriaScript)
    }
  }
  startTimer(): void {
    console.log("start game?" + this.startGame)
    if (this.startGame) {
      this.loteriaScript = ""
      const indexScript = randomIntFromInterval(0, this.randomCards[this.i].script.length > 0 ? this.randomCards[this.i].script.length - 1 : this.randomCards[this.i].script.length);
      this.seconds = 0;
      this.interval = setInterval(() => {
        this.cardNameSelected = this.randomCards[this.i].name as string;
        this.cardImgNameSelected = "/assets/img/cards/" + this.randomCards[this.i].imageName as string;
        this.seconds++;

        console.log("--------------------------------------")
        console.log("Index Script: " + indexScript)
        this.loteriaScript = this.randomCards[this.i].script[indexScript]
        // console.log(this.seconds);
        this.percent = (this.seconds * 100) / this.maxTime;
        if (this.seconds > this.maxTime) {
          this.i++;
          this.seconds = 0;
          this.killTimer();
          console.log(this.i);
          if (this.i < this.randomCards.length) {
            this.startTimer();
          }
        }
      }, 1000);
    }
  }
  // initializeCards(){
  //   const cards: Array<CardInfoDto>=LoteriaData;
  //   return cards; 
  // }
  killTimer() {
    clearInterval(this.interval);
  }
  randomizedCards(c: CardInfoDto[]) {
    // console.log("PRE RANDOM");
    // console.log(c);
    return c.sort(() => Math.random() - 0.5);
  }
  formatProgressBarToSeconds = () => (this.seconds <= 1) ? `${this.seconds} Seg` : `${this.seconds} Segs`;
  showModal(): void {
    this.modalVisible = true;
    this.killTimer();
    this.discoveredCards = [];
    const add = (this.seconds == 0) ? 0 : 1;
    for (let index = 0; index < this.i + add; index++) {
      this.discoveredCards.push(this.randomCards[index]);
    }
  }
  handleOk(): void {
    console.log("Nice!");

    this.isModalLoading = true;
    setTimeout(() => {
      this.modalVisible = false;
      this.isModalLoading = false;
    }, 3000);
    this.finishedGame = true;
    this.killTimer();
  }
  funStartGame(): void {
    this.startGame = true;
    this.finishedGame = false;
    this.startTimer();
  }
  handleCancel(): void {
    this.modalVisible = false;
    this.startTimer();
  }
  resetGame() {
    this.killTimer();
    this.randomCards = [];
    this.discoveredCards = [];
    this.randomCards = this.randomizedCards(LoteriaData);
    this.startTimer();
    this.finishedGame = false;
    this.modalVisible = false;
    console.log("Vuelve a iniciar");
    console.log(this.randomCards);
    this.i = 0;
    this.cardImgNameSelected = "";
    this.cardNameSelected = "";
  }
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
