import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-karthi',
  templateUrl: './karthi.component.html',
  styleUrls: ['./karthi.component.css']
})
export class KarthiComponent implements OnInit {

  @Output() karthiclicked = new EventEmitter();

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }



}