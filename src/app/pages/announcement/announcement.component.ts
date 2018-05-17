import {Component, OnInit, ViewChild} from '@angular/core';
import {JwtService} from "../../../shared/jwt.service";
import {Environment} from "../../../shared/environment";
import {AnnouncementService} from './announcement.service';
import {CardsComponent} from '../components/cards/cards.component';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  Data;
  isVisible:boolean=false;
  isConfirmLoading:boolean=false;
  mes:string='';
  @ViewChild(CardsComponent) cardComponent:CardsComponent;
  constructor(public jwt:JwtService,
              private ev:Environment,
              private announcementService:AnnouncementService,
              private router:ActivatedRoute) {
  }
  ngOnInit() {
    this.loadData();
    this.router.queryParams.subscribe(p=>{
      if(p){
        setTimeout(()=>{ this.cardComponent.cardsInit(false,p.id);},0)
      }
    })
  }
  addAnnouce(el){
    this.isVisible=true;
    this.mes='';
  }
  loadData(){
    this.Data=this.announcementService.cardsContent;
  }
  confirmModal(){
    this.isConfirmLoading=true;
    setTimeout(()=>{
      this.isConfirmLoading=false;
      this.isVisible=false;
      let data={id:this.Data.length+1,title:new Date().toLocaleString(),content:this.mes};
      this.announcementService.cardsContent.push(data);
      this.announcementService.sendAnnounce(data);
      this.loadData();
      setTimeout(()=>{ this.cardComponent.cardsInit(true);},0)
    },0);
  }
}
