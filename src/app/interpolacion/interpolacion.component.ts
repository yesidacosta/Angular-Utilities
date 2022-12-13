import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  variableInterpolada: String = "Soy una cadena interpolada";
  cadenaDevuelta: String = "Cadena devueta de un metodo"
  constructor() { }

  ngOnInit(): void {
  }

  getCadena(){
    
    return this.cadenaDevuelta;
  }
}
