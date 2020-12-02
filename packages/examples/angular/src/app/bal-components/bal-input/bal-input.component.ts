import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bal-input',
  templateUrl: './bal-input.component.html',
  styleUrls: ['./bal-input.component.scss']
})
export class BalInputComponent implements OnInit {
  inputValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
