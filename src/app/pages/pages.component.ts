import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {JwtService} from "../../shared/jwt.service";
import {Observable} from "rxjs/Observable";
import {AnnouncementService} from './announcement/announcement.service';
import {CardsModel} from './components/cards/cards.component';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  links:{parentLink:string,childLink:string}={parentLink:'',childLink:''};
  newMes:Array<CardsModel>=[];
  role="";
  constructor(
              private jwt: JwtService,
              private auth: AuthService,
              private Router: Router,
              private activatedRoute: ActivatedRoute,
              private announcementService:AnnouncementService) {
    this.newMes.push(this.announcementService.cardsContent[3])
    this.role=this.auth.getAuth();
    console.log(this.role);
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
    this.announcementService.getAnnounce().subscribe(d=>{
      console.log(d);
      this.newMes.push(d);
    })
  }

  quit() {
    this.jwt.delToken();
    this.Router.navigateByUrl('/login');
    console.log(this.jwt.getToken());
  }
  delAnnouce(e,id){
    e.preventDefault();
    let index=this.newMes.findIndex(v=>v.id==id);
    this.newMes.splice(index,1);
  }
}
