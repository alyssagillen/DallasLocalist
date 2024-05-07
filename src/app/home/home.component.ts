import { Component, OnInit } from '@angular/core';
import * as eventInfo from '../../assets/event-information.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public toggleJuneBoxesOn = true;
  public eventInfo: any = eventInfo;
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }
  toggleBoxesJune(toggleOn : boolean){
    this.toggleJuneBoxesOn = !this.toggleJuneBoxesOn;

  }


}
