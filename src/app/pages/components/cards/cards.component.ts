import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
var cards=require('./cards');
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
    cards.commentCards($('#cards'));
  }
}
export class CardsModel{
  title:string;
  content:string;
}
