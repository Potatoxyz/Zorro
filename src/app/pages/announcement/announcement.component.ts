import { Component, OnInit } from '@angular/core';
import {JwtService} from "../../../shared/jwt.service";
import {Environment} from "../../../shared/environment";
import {AnnouncementService} from './announcement.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
  providers:[AnnouncementService]
})
export class AnnouncementComponent implements OnInit {
  Data;
  constructor(public jwt:JwtService,
              private ev:Environment,
              private announcementService:AnnouncementService) {
    this.Data=this.announcementService.cardsContent;
  }
  ngOnInit() {
  }
}
