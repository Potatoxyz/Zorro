import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {JwtService} from "../../shared/jwt.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  links:{parentLink:string,childLink:string}={parentLink:'',childLink:''};
  constructor(private jwt: JwtService,
              private Router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.jwt.getToken()) {
      console.log('存在jwt，已登录');
    }
    this.Router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let l = event.url.split('/').slice(2);
        //console.log(this.activatiedLink);
        this.links={parentLink:l[0],childLink:l[1]};
      }
    });
  }

  quit() {
    this.jwt.delToken();
    this.Router.navigateByUrl('/login');
    console.log(this.jwt.getToken());
  }
}
