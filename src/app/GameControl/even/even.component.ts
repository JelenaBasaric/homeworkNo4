import { 
  Component,
  EventEmitter,
  OnInit,
  Output } from '@angular/core';
import { GameControlComponent } from 'src/app/game-control/game-control.component';
@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit{
  
  @Output() addedEvenNumber = new EventEmitter<{ num: number }>();
  ngOnInit(): void {
   
  }
  //[numb]="game-control"

  newNumber:number=0;
onAddEvenNumber(){
  this.addedEvenNumber.emit(
    {
      num:this.newNumber
    }
  )

}
}
