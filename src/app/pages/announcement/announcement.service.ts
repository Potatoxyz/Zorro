import {Injectable} from "@angular/core";
import {CardsModel} from '../components/cards/cards.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AnnouncementService{
  private sendOutMes:Subject<CardsModel>=new Subject<CardsModel>();
  cardsContent:Array<CardsModel>=[
    {id:1,title:'2018/5/9  下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {id:2,title:'2018/5/10 下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {id:3,title:'2018/5/11 下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {id:4,title:'2018/5/12 下午15:13',content:'今天放假今天放假今天放假今天放假'},
  ];
  sendAnnounce(val){
    this.sendOutMes.next(val);
  }
  getAnnounce(){
    return this.sendOutMes.asObservable();
  }
  constructor(){}
}
