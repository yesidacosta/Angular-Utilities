import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {

  source: String = "http://placeimg.com/150/150";
  widthSize?: String;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.widthSize = "250";
    },3000);
  }

}
