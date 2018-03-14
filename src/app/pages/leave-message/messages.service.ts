import {Injectable} from "@angular/core";

@Injectable()
export class MessagesService{
  messagesData:Array<mesDataModel>=[
    {user:'Test1',color:'red',messages:['aaaaa'],time:new Date()},
    {user:'User1',color:'green',messages:['bbbb'],time:new Date()},
  ];
}
export class mesDataModel{
  user:string;
  color:string;
  messages:Array<string>;
  time:Date;
}
