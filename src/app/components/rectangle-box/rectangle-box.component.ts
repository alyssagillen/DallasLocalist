import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { months } from '../../enums/months'

@Component({
  selector: 'app-rectangle-box',
  templateUrl: './rectangle-box.component.html',
  styleUrls: ['./rectangle-box.component.css']
})
export class RectangleBoxComponent implements OnInit {
  @Input() text: string = '';
  @Input() ticketLink: string = '';
  @Output() toggleBoxes = new EventEmitter<boolean>();
  public toggleOption = false;
  public toggleBoxesOn = true;
  constructor() { }

  ngOnInit(): void {
    this.isTextAMonth();
  }

  isTextAMonth(){
    if(Object.values(months).includes(this.text as months)){
      // Text boxes with month values also have a toggle function
      // The toggle shows and hides the event cards for the particular month
      this.toggleOption = true;
    }
  }

  doClick(){
    if(this.toggleOption){
        this.toggleBoxesOn = !this.toggleBoxesOn;
        this.toggleBoxes.emit(this.toggleBoxesOn);
    } else if(this.ticketLink === ''){
      window.location.href = "mailto:studiolocalist@gmail.com";
    } else {
      window.location.href = this.ticketLink;
    }
  }

}
