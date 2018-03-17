import {AfterViewInit, Component, OnInit} from '@angular/core';
import {mesDataModel, MessagesService} from "./messages.service";
import {EmojiService} from "../emoji.service";
import {ValueModel} from "../../../shared/Model/valueModel";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/distinct';
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
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

  searchDate:{starDate:Date,endDate:Date}={starDate:null,endDate:null};
  searchText:string='';
  users:Array<any>=[];
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(
        term=>{
          if(term.length < 2 ){return [];}
          else{
            let result=this.users.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).splice(0,10);
            let r:Array<any>=[];
            Observable.from(result).distinct().subscribe(re=>{r.push(re)});
            return r;
          }
        }
      );
  constructor(private messagesService:MessagesService,private emojiService:EmojiService) {
    this.messagesData=messagesService.messagesData;
    this.messagesData.forEach(val=>{this.users.push(val.user)});
    this.allEmoji=emojiService.emojis;
  }

  ngOnInit() {
    let p=$('#message-container').children('p:first');
    this.activeLine=$(p);
    this.bindPclick($(p));
  }
  selectUser(event:NgbTypeaheadSelectItemEvent){
    console.log(event.item);
    this.messagesData=this.messagesService.messagesData.filter(val=>val.user.indexOf(event.item)!=-1);
  }
  inputSelectAll(){
    $('#manSearch').select();
  }
  doSearch(){
    this.messagesService.messagesData.filter(v=>{
      let start=this.searchDate.starDate.getTime();
      let end=this.searchDate.endDate.getTime();

    });
  }
  reset(){
    this.messagesData=this.messagesService.messagesData;
    this.searchText='';
    this.searchDate={starDate:null,endDate:null};
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
    },1500)
  }
  ngAfterViewInit(){
    $('#message').focus(()=>{$('#message').parents('.area-container').css('border-color','#72abff')})
      .blur(()=>{$('#message').parents('.area-container').css('border-color','#A9A9A9')});
    $('.tools-emoji').children('i').removeAttr('title');
  }
}
