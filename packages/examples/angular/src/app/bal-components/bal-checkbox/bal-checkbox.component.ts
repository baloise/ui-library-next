import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bal-checkbox',
  templateUrl: './bal-checkbox.component.html',
  styleUrls: ['./bal-checkbox.component.scss']
})
export class BalCheckboxComponent implements OnInit {
  checkbox: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
