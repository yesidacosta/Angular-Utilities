import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.scss']
})
export class DirectivaNgIfComponent implements OnInit {

  condicion?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
