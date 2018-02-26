import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from "ng-zorro-antd";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  previewImage = '';
  previewVisible = false;
  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  statuChange(event){
    console.log(event);
  }
}
