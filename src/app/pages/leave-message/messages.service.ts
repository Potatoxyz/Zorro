import {Injectable} from "@angular/core";

@Injectable()
export class MessagesService{
  messagesData:Array<mesDataModel>=[
    {user:'Test1',color:'red',messages:['aaaaa'],time:new Date(2018,2,13,15,23)},
    {user:'User1',color:'green',messages:['bbbb'],time:new Date(2018,2,13,16,23)},
    {user:'User1',color:'green',messages:['cccc'],time:new Date(2018,2,14,11,55)},
    {user:'User2',color:'pink',messages:['dddd'],time:new Date(2018,2,14,18,34)},
    {user:'User1',color:'green',messages:['eeee'],time:new Date(2018,2,14,21,29)},
    {user:'User3',color:'orange',messages:['ffff'],time:new Date(2018,2,15,10,44)},
  ];
}
export class mesDataModel{
  user:string;
  color:string;
  messages:Array<string>;
  time:Date;
}
