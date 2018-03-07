import { Component, OnInit } from '@angular/core';
import {IndexService} from "./index.service";
import {ActivatedRoute, NavigationExtras, Route, Router, RouterModule} from "@angular/router";
import {DisplayPic} from "./display-pic.animation";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[IndexService],
  animations:[DisplayPic()]
})
export class IndexComponent implements OnInit {
  Plans:Array<PlansModel>=[];
  gridStyle = {
    width: '350px',
    textAlign: 'center',
  };
  cardsContent:Array<any>=[];
  show:boolean=true;
  imgUrls:Array<any>=[];
  constructor(private indexService:IndexService,
              private router:Router) {
    this.cardsContent=indexService.cardsContent;
  }

  ngOnInit() {
    this.Plans.push({complete:false,message:'hahaha'});
  }
  navgateToPic(urls:Array<any>){
    this.show=!this.show;
    this.imgUrls=urls;
  }
}
export class PlansModel{
  complete:boolean;
  message:string;
}
