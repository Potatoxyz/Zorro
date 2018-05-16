import {Injectable} from "@angular/core";
import {CardsModel} from '../components/cards/cards.component';

@Injectable()
export class AnnouncementService{
  cardsContent:Array<CardsModel>=[
    {title:'2018/5/9  下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018/5/10 下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018/5/11 下午15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018/5/12 下午15:13',content:'今天放假今天放假今天放假今天放假'},
  ];
  constructor(){}
}
