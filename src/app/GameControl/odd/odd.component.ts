import { Component,EventEmitter,OutputDecorator,Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
 @Output() addedOddNumber=new EventEmitter<{num :number}>();
 newNumber:number=1;

onAddOddNumber(){
  this.addedOddNumber.emit(
    {
      num:this.newNumber
    }
  )

}
}
