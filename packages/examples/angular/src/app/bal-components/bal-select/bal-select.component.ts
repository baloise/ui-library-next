import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bal-select',
  templateUrl: './bal-select.component.html',
  styleUrls: ['./bal-select.component.scss']
})
export class BalSelectComponent implements OnInit {
  selected: string[] = ["1998"]

  constructor() { }

  ngOnInit(): void {
  }

}
