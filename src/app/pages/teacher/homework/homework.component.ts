import { Component, OnInit } from '@angular/core';
import {HomeworkService} from "./homework.service";
import {Environment} from "../../../../shared/environment";
import {NzModalService} from 'ng-zorro-antd';

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
  homeworkName:string='';
  homeworkContent:string='';
  customStyle: {
    'background': '#f7f7f7',
    'border-radius': '4px',
    'margin-bottom': '24px',
    'border': '0px'
  };
  constructor(private homeworkService:HomeworkService,
              private ev:Environment,
              private modalService: NzModalService) {
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
    this.homeworkName=item.name;
  }
  confirmModal(isEdit:boolean,id:any){
    if(this.homeworkContent==""){
      this.modalService.error({title: '错误', content: '作业描述不能为空！',zIndex:1001});
    }
    else{
      this.isVisible=false;
      if(isEdit){
        let index=this.homeworkService.panels.findIndex(v=>v.id==id);
        this.homeworkService.panels[index].name=this.homeworkName;
        this.homeworkService.panels[index].content=this.homeworkContent;
      }
      else{
        this.homeworkService.panels.push(
          {
            id:3,
            active: false,
            disabled: true,
            name: this.homeworkName,
            time:new Date(),
            content:this.homeworkContent,
            attachment:`这是${this.homeworkName}的附件`
          }
        );
      }
    }
  }
  openAddHomeworkModal(){
    this.isVisible=true;
    this.isEditHomework=false;
    this.homeworkContent='';
  }
}
