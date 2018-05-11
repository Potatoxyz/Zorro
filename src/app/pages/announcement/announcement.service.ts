import {Injectable} from "@angular/core";
import {CardsModel} from '../components/cards/cards.component';

@Injectable()
export class AnnouncementService{
  cardsContent:Array<CardsModel>=[
    {title:'2018-5-9 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-10 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-11 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-12 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-13 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-14 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-15 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-16 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-17 15:13',content:'今天放假今天放假今天放假今天放假'},
    {title:'2018-5-18 15:13',content:'今天放假今天放假今天放假今天放假'},
  ];
  constructor(){}
}
