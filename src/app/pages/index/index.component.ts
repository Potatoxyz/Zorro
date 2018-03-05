import { Component, OnInit } from '@angular/core';
import {IndexService} from "./index.service";
import {ActivatedRoute, NavigationExtras, Route, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[IndexService]
})
export class IndexComponent implements OnInit {
  Plans:Array<PlansModel>=[];
  gridStyle = {
    width: '350px',
    textAlign: 'center',
  };
  cardsContent:Array<any>=[];
  constructor(private indexService:IndexService,
              private router:Router) {
    this.cardsContent=indexService.cardsContent;
  }

  ngOnInit() {
    this.Plans.push({complete:false,message:'hahaha'});
  }
  navgateToPic(){
    let options:NavigationExtras={queryParams:{subject:'1111',chapter:'111'}};
   this.router.navigateByUrl('/pages/display',options);
  }
}
export class PlansModel{
  complete:boolean;
  message:string;
}
