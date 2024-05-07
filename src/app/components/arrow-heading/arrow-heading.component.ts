import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-arrow-heading',
  templateUrl: './arrow-heading.component.html',
  styleUrls: ['./arrow-heading.component.css']
})
export class ArrowHeadingComponent implements OnInit {
  
  @Input() headingText: string ='';
  public shortBox: boolean = false;
  constructor() { }

  ngOnInit(): void {
    //If the text of the box is "contact us"
    //then the box will always be short, even in desktop view.
    //The boxes with other headings will have a responsive width
    if(this.headingText === "contact"){
      this.shortBox = true;
    }
  }

}
