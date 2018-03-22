import { Component, OnInit } from '@angular/core';
import {HomeworkService} from "../teacher/homework/homework.service";

@Component({
  selector: 'app-handin-work',
  templateUrl: './handin-work.component.html',
  styleUrls: ['./handin-work.component.scss'],
  providers:[HomeworkService]
})
export class HandinWorkComponent implements OnInit {
  customStyle: {
    'background': '#f7f7f7',
    'border-radius': '4px',
    'margin-bottom': '24px',
    'border': '0px'
  };
  panels = [];
  fileList = [];
  constructor(private homeworkService:HomeworkService,) {
    this.panels=homeworkService.panels;
    this.fileList=homeworkService.fileList;
  }

  ngOnInit() {
  }
  DoHandIn(){

  }
}
