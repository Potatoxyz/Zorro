import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.url.subscribe(data=>{console.log(data)});
  }

}
