import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent  {
  constructor(private  _message:NzMessageService) { }
  handError = (err) => {
    if(!err.error.message){
      this._message.create('error', '网络连接错误',{nzDuration: 5000});
    }
    else{
      this._message.create('error',err.error.message);
    }
  };
  alertSuccess(message){
    this._message.create('success',message);
  }
}
