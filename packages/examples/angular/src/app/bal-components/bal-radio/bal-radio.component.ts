import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bal-radio',
  templateUrl: './bal-radio.component.html',
  styleUrls: ['./bal-radio.component.scss']
})
export class BalRadioComponent implements OnInit {
  selected: number

  constructor() { }

  ngOnInit(): void {
  }

}
