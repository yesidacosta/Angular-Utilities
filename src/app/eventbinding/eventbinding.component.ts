import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {

  resultatoEventoParametro?: any;
  resultadoEvento?: any;

  constructor() { }

  ngOnInit(): void {
  }

  accionEventoConParametro(event?: any){
    this.resultatoEventoParametro = event.target;
    return event.target;
  }

  accionEvento(){
    return this.resultadoEvento = "Cadena que resulto de un evento sin parametro"
  }
}
