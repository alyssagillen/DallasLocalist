import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() artistName : string = "";
  @Input() date : string = "";
  @Input() venue : string = "";
  @Input() vibeDescription : string = "";
  @Input() additionalDescription : string = "";
  @Input() ticketLink : string = "";
  @Input() toggleBoxesOn : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
