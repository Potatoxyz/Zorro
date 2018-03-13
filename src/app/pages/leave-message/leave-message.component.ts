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
  messages:Array<mesDataModel>=[];
  message:string='';
  allEmoji:Array<ValueModel>=[];
  constructor(private messagesService:MessagesService,private emojiService:EmojiService) {
    this.messages=messagesService.messagesData;
    this.allEmoji=emojiService.emojis;
  }

  ngOnInit() {
    let p=$('#message-container').children('p:first');
    this.activeLine=$(p);
    this.bindPclick($(p));
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
    $('#message-container').find('i').attr('contentEditable','false').css('verticalAlign','middle');
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
    //console.log(this.activeLine);n
  }
  bindPclick(target){
    $(target).click(()=>{this.activeLine=target});
  }
  publishMessage(){
    let mes='';
    let p=$('#message-container').children('p');
    $(p).each((index,el)=>{
     let i=$(el).find('i');
     let html:string=$(el).html();
     console.log(html);
    });
  }
  ngAfterViewInit(){
    $('#message').focus(()=>{$('#message').parents('.area-container').css('border-color','#72abff')})
      .blur(()=>{$('#message').parents('.area-container').css('border-color','#A9A9A9')});
    $('.tools-emoji').children('i').removeAttr('title');
  }
}
