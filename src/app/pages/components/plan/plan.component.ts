import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  private _item:planItemModel;
  @Input()
  set item(item){this._item=item};
  get item(){return this._item};

  @Output() delItem=new EventEmitter();
  @Output() editItem=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  _delItem(id:number){
    this.delItem.emit(id);
  }
  _editItem(id:number){
    this.delItem.emit(id);
  }
}
export class planItemModel{
  id:number;
  statu:string;
  text:string;
  StartTime:Date;
  EndTime:Date;
}
