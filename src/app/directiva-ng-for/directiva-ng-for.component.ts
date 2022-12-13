import { Component, OnInit } from '@angular/core';
import { Planeta } from '../shared/interfaces/planeta';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.scss']
})
export class DirectivaNgForComponent implements OnInit {

  items: String[] = ["Fernando", "Gonzales", "Gutierres", "Rodriguez", "Guerrero"];

  planetas: Planeta[] = [
    {
      id: 1,
      nombre: "Mercurio"
    },
    {
      id: 2,
      nombre: "Venus"
    },
    {
      id: 3,
      nombre: "Tierra"
    },
    {
      id: 4,
      nombre: "Marte"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackByItem(index: Number, item: Planeta){
    return item.id;
  }

  recargarFor(){
    this.planetas = [
      /*Elemento modificado */
      {
        id: 1,
        nombre: "Mercúrio"
      },
      {
        id: 2,
        nombre: "Venus"
      },
      {
        id: 3,
        nombre: "Tierra"
      },
      {
        id: 4,
        nombre: "Marte"
      },
      {
        id: 5,
        nombre: "Júpiter"
      },
      /*Modificar este elemento, presionar botón y ver en el inspector*/
      {
        id: 6,
        nombre: "Saturno"
      },
      {
        id: 7,
        nombre: "Urano"
      }
    ]
  }
}
