import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  check: string = ""
  box1: string = ""
  box2: string = ""
  box3: string = ""
  box4: string = ""
  box5: string = ""
  box6: string = ""
  box7: string = ""
  box8: string = ""
  box9: string = ""
  winner: string = ""
  checker(){
    if (this.box1 === this.box2 && this.box2 === this.box3 && this.box3 === "X"){
      this.winner = "Player " + this.box1 + " Won🏆"
      this.check = ""
    }
    else if (this.box1 === this.box2 && this.box2 === this.box3 && this.box3 === "O"){
      this.winner = "Player " + this.box1 + " Won🏆"
      this.check = ""
    }
    else if (this.box4 === this.box5 && this.box5 === this.box6 && this.box6 === "O" || (this.box4 === this.box5 && this.box5 === this.box6 && this.box6 === "X")){
      this.winner = "Player " + this.box5 + " Won🏆"
      this.check = ""
    }
    else if (this.box7 === this.box8 && this.box8 === this.box9 && this.box9 === "O" || (this.box7 === this.box8 && this.box8 === this.box9 && this.box9 === "X")){
      this.winner = "Player " + this.box7 + " Won🏆"
      this.check = ""
    }
    else if (this.box1 === this.box4 && this.box4 === this.box7 && this.box1 === "O" || (this.box1 === this.box4 && this.box4 === this.box7 && this.box1 === "X")){
      this.winner = "Player " + this.box1 + " Won🏆"
      this.check = ""
    }
    else if (this.box2 === this.box5 && this.box5 === this.box8 && this.box8 === "O" || (this.box2 === this.box5 && this.box5 === this.box8 && this.box8 === "X")){
      this.winner = "Player " + this.box8 + " Won🏆"
      this.check = ""
    }
    else if (this.box3 === this.box9 && this.box9 === this.box6 && this.box6 === "O" || (this.box3 === this.box9 && this.box9 === this.box6 && this.box6 === "X")){
      this.winner = "Player " + this.box6 + " Won🏆"
      this.check = ""
    }
    else if (this.box1 === this.box5 && this.box5 === this.box9 && this.box9 === "O" || (this.box1 === this.box5 && this.box5 === this.box9 && this.box9 === "X")){
      this.winner = "Player " + this.box5 + " Won🏆"
      this.check = ""
    }
    else if (this.box3 === this.box5 && this.box5 === this.box7 && this.box7 === "O" || (this.box3 === this.box5 && this.box5 === this.box7 && this.box7 === "X")){
      this.winner = "Player " + this.box5 + " Won🏆"
      this.check = ""
    }
  }
   move1(){
    if (this.check === "" || this.check === "O"){
      this.box1 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box1 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move2(){
    let box2 = ""
    if (this.check === "" || this.check === "O"){
      this.box2 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box2 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move3(){
    let box3 = ""
    if (this.check === "" || this.check === "O"){
      this.box3 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box3 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move4(){
    let box4 = ""
    if (this.check === "" || this.check === "O"){
      this.box4 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box4 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move5(){
    let box5 = ""
    if (this.check === "" || this.check === "O"){
      this.box5 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box5 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move6(){
    let box6 = ""
    if (this.check === "" || this.check === "O"){
      this.box6 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box6 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move7(){
    let box7 = ""
    if (this.check === "" || this.check === "O"){
      this.box7 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box7 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move8(){
    let box8 = ""
    if (this.check === "" || this.check === "O"){
      this.box8 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box8 = "O"
        this.check = "O"
    }
    this.checker()
   }
   move9(){
    let box9 = ""
    if (this.check === "" || this.check === "O"){
      this.box9 = "X"
      this.check ="X"
    }
    else if (this.check === "X"){
        this.box9 = "O"
        this.check = "O"
    }
    this.checker()
   }
}
