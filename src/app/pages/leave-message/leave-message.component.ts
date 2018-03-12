import {AfterViewInit, Component, OnInit} from '@angular/core';
import {mesDataModel, MessagesService} from "./messages.service";
import {EmojiService} from "../emoji.service";
import {ValueModel} from "../../../shared/Model/valueModel";
import {FromEventObservable} from "rxjs/observable/FromEventObservable";

@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss'],
  providers:[MessagesService]
})
export class LeaveMessageComponent implements OnInit,AfterViewInit {
  tabs = [
    {
      active: true,
      name  : 'Tab 1',
      icon  : 'anticon anticon-apple'
    },
    {
      active: false,
      name  : 'Tab 2',
      icon  : 'anticon anticon-android'
    }
  ];
  messages:Array<mesDataModel>=[];
  message:string='';
  allEmoji:Array<ValueModel>=[];
  constructor(private messagesService:MessagesService,private emojiService:EmojiService) {
    this.messages=messagesService.messagesData;
    this.allEmoji=emojiService.emojis;
  }

  ngOnInit() {

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
  addEmoji(dom){
    let emojiDom=$(dom).html();
    $('#message-container').append(emojiDom);
    this.closeEmojiPane();
  }
  editMessage(target,dom){
    FromEventObservable.create(target,'keypress').subscribe(e=>{
      console.log(e);
    });
    // this.message+=dom.innerText;
    // console.log(this.message)
  }
  ngAfterViewInit(){
    $('#message').focus(()=>{$('#message').parents('.area-container').css('border-color','#72abff')})
      .blur(()=>{$('#message').parents('.area-container').css('border-color','#A9A9A9')});
    $('.tools-emoji').children('i').removeAttr('title');
  }
}
