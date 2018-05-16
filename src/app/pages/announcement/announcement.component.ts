import {Component, OnInit, ViewChild} from '@angular/core';
import {JwtService} from "../../../shared/jwt.service";
import {Environment} from "../../../shared/environment";
import {AnnouncementService} from './announcement.service';
import {CardsComponent} from '../components/cards/cards.component';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
  providers:[AnnouncementService]
})
export class AnnouncementComponent implements OnInit {
  Data;
  isVisible:boolean=false;
  isConfirmLoading:boolean=false;
  mes:string='';
  @ViewChild(CardsComponent) cardComponent:CardsComponent;
  constructor(public jwt:JwtService,
              private ev:Environment,
              private announcementService:AnnouncementService) {
    this.Data=this.announcementService.cardsContent;
  }
  ngOnInit() {
  }
  addAnnouce(el){
    this.isVisible=true;
    this.mes='';
  }
  confirmModal(){
    this.isConfirmLoading=true;
    setTimeout(()=>{
      this.isConfirmLoading=false;
      this.isVisible=false;
      this.Data.push({title:new Date().toLocaleString(),content:this.mes});
      setTimeout(()=>{ this.cardComponent.cardsInit(true);},0)
    },0);
  }
}
