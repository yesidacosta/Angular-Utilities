import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {
  datoTwoWayBinding: String = "Valor inicial";

  constructor() { }

  ngOnInit(): void {
  }

  valorActual(){
    console.log("Dato actual de variable datoTwoWayBinding: ", this.datoTwoWayBinding)
  }

}
