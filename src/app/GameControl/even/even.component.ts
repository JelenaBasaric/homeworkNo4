import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit{
  @Output() addedEvenNumber = new EventEmitter<{ num: number }>();
  ngOnInit(): void {
   
  }
 newNumber:number=0;
onAddEvenNumber(){
  this.addedEvenNumber.emit(
    {
      num:this.newNumber
    }
  )

}
}
