import {Injectable} from "@angular/core";

@Injectable()
export class MessagesService{
  messagesData:Array<mesDataModel>=[
    {user:'Test1',color:'red',message:'aaaaa',time:new Date()},
    {user:'User1',color:'green',message:'bbbb',time:new Date()},
  ];
}
export class mesDataModel{
  user:string;
  color:string;
  message:string;
  time:Date;
}
