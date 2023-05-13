import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {

  onStart() {
    this.addNumber();
    this.id=setInterval(() => {
      this.addNumber();
    }, 1000);
  }



  onStop() {
      clearInterval(this.id);
    
  }
  
  id: any;
  numbers: number[] = [];
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  @Input('some') numb: number = 0;
  //oddnumber = false;
  addNumber() {
    this.numb++;  
    if (this.numb % 2 == 0 ) {
      this.evenNumbers.push(this.evenNumbers.length+1);
    }
    else {
      this.oddNumbers.push(this.oddNumbers.length+1);
    }
   
  }
}



