import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import * as eventInfo from '../../assets/event-information.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public toggleJuneBoxesOn = true;
  public eventInfo: any = eventInfo;
  public underConstruction = true;
  objectKeys = Object.keys;

  constructor(private gtag: Gtag) { 
    this.gtag.event('screen_view', {
    'app_name': 'myApp',
    'screen_name': 'Home'
  }); }

  ngOnInit(): void {
  }
  toggleBoxesJune(toggleOn : boolean){
    this.toggleJuneBoxesOn = !this.toggleJuneBoxesOn;

  }


}
