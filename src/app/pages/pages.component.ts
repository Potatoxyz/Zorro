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
              private Router:Router) { }

  ngOnInit() {
    if(this.jwt.getToken()){
      console.log('存在jwt，已登录');
    }
  }
  quit(){
    this.jwt.delToken();
    this.Router.navigateByUrl('/login');
    console.log(this.jwt.getToken());
  }
}
