import {AfterViewInit, Component, OnInit} from '@angular/core';
import {mesDataModel, MessagesService} from "./messages.service";
import {EmojiService} from "../emoji.service";
import {ValueModel} from "../../../shared/Model/valueModel";
import {Observable} from "rxjs";



@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss'],
  providers:[MessagesService]
})
export class LeaveMessageComponent implements OnInit,AfterViewInit {
  messagesData:Array<mesDataModel>=[];
  allEmoji:Array<ValueModel>=[];
  isloading:boolean=false;

  searchDate:{starDate:Date,startTime:Date}={starDate:null,startTime:null};
  searchText:string='';
  results:Array<any>=[];
  users:Array<any>=[];

  constructor(private messagesService:MessagesService,private emojiService:EmojiService) {
    this.messagesData=messagesService.messagesData;
    this.messagesData.forEach(val=>{
      this.users.push(val.user.toLowerCase());
    });
    this.allEmoji=emojiService.emojis;
  }

  ngOnInit() {
    let p=$('#message-container').children('p:first');
    this.activeLine=$(p);
    this.bindPclick($(p));
    Observable.fromEvent($('#searchText')[0],'input').debounceTime(1000).filter(v=>
     this.searchText.length>=3
    ).subscribe(e=>{
      this.results=[];
      this.users.forEach(val=>{
        if(val.indexOf(this.searchText)!=-1){

        }
      })
      //console.log(this.searchText);
    });
  }
  openEmojiPane(){
    $('#emoji-pane').show();
    $('body').append('<div class="pane-container"></div>');
    $('.pane-container').css({'height':$('body').height(),'position':'fixed','width':'100%','top':'0','zIndex':'999'})
      .click(this.closeEmojiPane);
    $('.emoji-item').children('i').removeAttr('title');
  }
  closeEmojiPane(){
    $('#emoji-pane').hide();
    $('.pane-container').remove();
     }
  addEmoji(dom,emojiValue){
    let emojiDom=$(dom).html();
    $(this.activeLine).append(emojiDom+"&nbsp;");
    //$('#message-container')[0].focus();
    $('#message-container').find('i:last').attr({'contentEditable':'false','title':emojiValue}).css('verticalAlign','middle');
    this.closeEmojiPane();
  }
  editMessage(e){
    if(!$(e.target).has('p').length){
      $('#message-container').append('<p style="height: 30px;width: 100%;"></p>');
    }
  }
  activeLine:any;
  recordActiveLine(){
    this.activeLine=$('#message-container').children('p:last');
    $(this.activeLine).children('br').remove();
    let p=$('#message-container').children('p');
    $(p).each((index,el)=>{
      this.bindPclick(el);
    });
    //console.log(this.activeLine);
  }
  bindPclick(target){
    $(target).click(()=>{this.activeLine=target});
  }
  publishMessage(){
    let mes:Array<any>=[];
    let p=$('#message-container').children('p');
    $(p).each((index,el)=>{
     let i=$(el).find('i');
     let tempEl=$(el).clone();
     let temphtml=$(tempEl).html();
     let newstr=temphtml;
     $(i).each((index1,el1)=>{
       newstr=newstr.replace(el1.outerHTML,$(el1).attr('title'));
     });
      if(newstr){mes.push(newstr);}
      else{mes.push(temphtml);}
    });
    this.isloading=true;
    setTimeout(()=>{
      this.messagesData.push({user:'DevUser',color:'black',messages:mes,time:new Date()});
      this.isloading=false;
      $('#message-container').text('');
      $('#message-container').append('<p style="height: 30px;width: 100%;"></p>');
      this.recordActiveLine();
    },3000)
  }
  ngAfterViewInit(){
    $('#message').focus(()=>{$('#message').parents('.area-container').css('border-color','#72abff')})
      .blur(()=>{$('#message').parents('.area-container').css('border-color','#A9A9A9')});
    $('.tools-emoji').children('i').removeAttr('title');
  }
}
