import { Component, OnInit } from '@angular/core';
import {HomeworkService} from "./homework.service";
import {Environment} from "../../../shared/environment";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss'],
  providers:[HomeworkService]
})
export class HomeworkComponent implements OnInit {
  url;
  panels = [];
  isVisible:boolean=false;
  isEditHomework:boolean=false;
  EditHomeworkItem:any;
  isConfirmLoading:boolean=false;
  fileList = [];
  homeworkContent:string='';
  constructor(private homeworkService:HomeworkService,
              private ev:Environment) {
    this.panels=homeworkService.panels;
    this.fileList=homeworkService.fileList;
    this.url=ev.uploadHomework;
  }

  ngOnInit() {
  }
  DoEditHomeWork(e:any,item:any){
    e.stopPropagation();
    this.isVisible=true;
    this.isEditHomework=true;
    this.EditHomeworkItem=item;
    this.homeworkContent=item.content;
  }
  confirmModal(isEdit:boolean,id:any){
    this.isVisible=false;
    if(isEdit){

    }
  }
  openAddHomeworkModal(){
    this.isVisible=true;
    this.isEditHomework=false;
    this.homeworkContent='';
  }
}
