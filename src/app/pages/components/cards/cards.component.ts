import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit,AfterViewInit{
  @Input() Data:Array<CardsModel>=[];
  constructor() { }
  ngOnInit(){
  }
  ngAfterViewInit(){
   this.cardsInit();
  }
  cardsInit(isNew:boolean=false,target?:number){
    var $this = $("#cards"), $cards = $('li.card'),
    $current = $cards.filter('.card--current'), $next;
    $cards.on('click',function(){
      if ( !$current.is(this)) {
        next(this);
      }
    });
    var next=function (_this) {
      $cards.removeClass('card--current card--out card--next');
      $current.addClass('card--out');
      $current = $(_this).addClass('card--current');
      $next = $current.next();
      $next = $next.length ? $next : $cards.first();
      $next.addClass('card--next');
    };
    if(isNew){
      $current = $cards.eq(-2);
      next($cards.last());
    }
    if(!isNaN(target)){
      console.log(target);
      $current = $(`li.id${target-1}`);
      next($(`li.id${target}`));
    }
    if ( !$current.length ) {
      $current = $cards.last();
      next($cards.first());
    }
    $this.addClass('cards--active');
  }
}
export class CardsModel{
  id:number;
  title:string;
  content:string;
}
