import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from "ng-zorro-antd";
import {Subscription} from "rxjs/Subscription";
import {JwtService} from "../../../shared/jwt.service";
import {UploadService} from "./upload.service";
import {Environment} from "../../../shared/environment";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers:[UploadService]
})
export class UploadComponent implements OnInit {
  url:string;
  fileList = [];
  previewImage = '';
  previewVisible = false;
  _options = null;
  _value: any[] = null;
  init_options:any;
  selectedChapter:string;
  Header={};
  constructor(private msg: NzMessageService,public jwt:JwtService,
              private uploadService:UploadService,
              private ev:Environment) {
    this.url=ev.uploadPDF;
    this.init_options=uploadService.init_options;
    this._options = this.init_options;
    this.Header={'Authorization':jwt.getToken()};
  }

  ngOnInit() {
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  statuChange(event){
    console.log(event);
  }

  _console(value) {
    //console.log(value);
    this.selectedChapter=value.toString();
    console.log(this.selectedChapter);
  }
}
