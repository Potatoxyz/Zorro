import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NzModalComponent, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @ViewChild(NzModalComponent) modal:NzModalComponent;
  @Input()
  _item:planItemModel;
  // _item:planItemModel;
  // @Input()
  // set item(item){this._item=item};
  // get item(){return this._item};

  @Output() delItem=new EventEmitter();
  @Output() editItem=new EventEmitter();

  _start:{startTime:Date,startDate:Date}={startTime:null,startDate:null};
  _end:{endDate:Date,endTime:Date}={endDate:null,endTime:null};
  text:string='';


  constructor(private modalService:NzModalService) { }
  ngOnInit() {
  }
  _delItem(id:number){
    this.delItem.emit(id);
  }

  _editItem(id:number,content:any){
    let onModalConfirm=()=>{
      let newStartDate=new Date();
      newStartDate.setFullYear(this._start.startDate.getFullYear(),this._start.startDate.getMonth(),this._start.startDate.getDate());
      newStartDate.setHours(this._start.startTime.getHours(),this._start.startTime.getMinutes());
      let newEndDate=new Date();
      newEndDate.setFullYear(this._end.endDate.getFullYear(),this._end.endDate.getMonth(),this._end.endDate.getDate());
      newEndDate.setHours(this._end.endTime.getHours(),this._end.endTime.getMinutes());

      if(newEndDate.getTime()<newStartDate.getTime()){
        this.modalService.error({title:'错误',content:'结束日期不能小于开始日期!'});
      }
      else{
        this._item.StartTime=newStartDate;
        this._item.EndTime=newEndDate;
        this._item.text=this.text;
      }
    };
    let onModalCancel=()=>{};

    const modal=this.modalService.open({content:content,title:'编辑计划内容',
      onOk:onModalConfirm,onCancel:onModalCancel,maskClosable:false});

    modal.on('onShown',()=>{
      //console.log(d);
      $('#mytextarea')[0].focus();
      $('.ant-modal-title').css({'borderBottom':'1px solid #a39d9d','paddingBottom':'5px'});
      this._start.startTime=this._item.StartTime;
      this._start.startDate=this._item.StartTime;
      this._end.endDate=this._item.EndTime;
      this._end.endTime=this._item.EndTime;
      this.text=this._item.text;


    });
    this.editItem.emit(id);

  }
}
export class planItemModel{
  id:number;
  statu:string;
  text:string;
  StartTime:Date;
  EndTime:Date;
}
