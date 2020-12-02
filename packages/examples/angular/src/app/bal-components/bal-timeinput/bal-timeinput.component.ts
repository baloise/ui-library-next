import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bal-timeinput',
  templateUrl: './bal-timeinput.component.html',
  styleUrls: ['./bal-timeinput.component.scss']
})
export class BalTimeinputComponent implements OnInit {
  value: string = '08:00'
  
  constructor() { }

  ngOnInit(): void {
  }

}
