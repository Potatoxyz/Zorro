import {Injectable} from "@angular/core";

@Injectable()
export class MessagesService{
  messagesData:Array<mesDataModel>=[
    {user:'小明',color:'red',messages:['想要一份外文文献，有推荐吗'],time:new Date(2018,2,13,15,23)},
    {user:'小红',color:'green',messages:['如何分析地下水的形成'],time:new Date(2018,2,13,16,23)},
    {user:'小李',color:'#0e77ca',messages:['最迟什么时候交作业'],time:new Date(2018,2,14,11,55)},
  ];
}
export class mesDataModel{
  user:string;
  color:string;
  messages:Array<string>;
  time:Date;
}
