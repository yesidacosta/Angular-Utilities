import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariables',
  templateUrl: './templatevariables.component.html',
  styleUrls: ['./templatevariables.component.scss']
})
export class TemplatevariablesComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  gestionarTemplateVariable(templatevariable: any){
    /*Imprimir */
    console.log(templatevariable);
  }
}
