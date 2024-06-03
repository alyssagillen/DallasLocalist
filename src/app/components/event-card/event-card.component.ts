import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() artistName : string = "";
  @Input() subTitle : string = "";
  @Input() date : string = "";
  @Input() venue : string = "";
  @Input() time : string = "";
  @Input() description : string = "";
  @Input() additionalDescription : string = "";
  @Input() link: string = "";
  @Input() toggleBoxesOn : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
