import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../shared/jwt.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;

  constructor(private jwt:JwtService,
              private Router:Router,
              private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    if(this.jwt.getToken()){
      console.log('存在jwt，已登录');
    }
    this.Router.events.subscribe(event=>{
      console.log(event);
    });
  }
  quit(){
    this.jwt.delToken();
    this.Router.navigateByUrl('/login');
    console.log(this.jwt.getToken());
  }
}
