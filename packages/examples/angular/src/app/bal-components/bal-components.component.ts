import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bal-components',
  templateUrl: './bal-components.component.html',
  styleUrls: ['./bal-components.component.scss']
})
export class BalComponentsComponent implements OnInit {
  routes = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.routes = this.route.config;
    this.routes.shift()
    this.routes.pop()
  }

}
