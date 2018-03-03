import { Component, OnInit } from '@angular/core';
import {IndexService} from "./index.service";

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
  constructor(private indexService:IndexService) {
    this.cardsContent=indexService.cardsContent;
  }

  ngOnInit() {
    this.Plans.push({complete:false,message:'hahaha'});
  }
  navgateToPic(){

  }
}
export class PlansModel{
  complete:boolean;
  message:string;
}
