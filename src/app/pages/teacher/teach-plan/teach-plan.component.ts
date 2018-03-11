import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TeachPlanService} from "./teach-plan.service";
import {NzModalService} from "ng-zorro-antd";
import {planItemModel} from "../../components/plan/plan.component";
@Component({
  selector: 'app-teach-plan',
  templateUrl: './teach-plan.component.html',
  styleUrls: ['./teach-plan.component.scss']
})
export class TeachPlanComponent implements OnInit,AfterViewInit {
  plans:Array<planItemModel>=[];
  _start:{startTime:Date,startDate:Date}={startTime:null,startDate:null};
  _end:{endDate:Date,endTime:Date}={endDate:null,endTime:null};
  text:string;

  isVisible:boolean=false;
  isConfirmLoading = false;
  modalTitle:string='添加新计划';
  constructor(private p:TeachPlanService,
              private modalService:NzModalService) {
    this.plans=p.plans;
  }

  ngOnInit() {
  }
  _getPlanDel(id:number){
    let index=this.plans.findIndex(v=>v.id==id);
    this.plans.splice(index,1);
    console.log(id);
  }
  _getPlanEdit(id:number){
    console.log(id);
  }
  handleCancel(){

  }
  handleOk(){

  }
  openAddPlanModal(){
    this.isVisible=true;
    // this._start={startTime:null,startDate:null};
    // this._end={endDate:null,endTime:null};
    // this.text='';
    // let onModalConfirm=()=>{
    //     let newStart=new Date();
    //     newStart.setFullYear(this._start.startDate.getFullYear(),this._start.startDate.getMonth(),this._start.startDate.getDate());
    //     newStart.setHours(this._start.startDate.getHours(),this._start.startDate.getMinutes());
    //     let newEndDate=new Date();
    //     newEndDate.setFullYear(this._end.endDate.getFullYear(),this._end.endDate.getMonth(),this._end.endDate.getDate());
    //     newEndDate.setHours(this._end.endTime.getHours(),this._end.endTime.getMinutes());
    //     let newText=this.text;
    //     this.plans.unshift({id:Math.random()*(99)+1,StartTime:newStart,EndTime:newEndDate,text:newText,statu:'undone'});
    // };
    // const modal=this.modalService.open({content:content,title:'添加新计划',
    //   onOk:onModalConfirm,maskClosable:false,footer:footer});

  }
  ngAfterViewInit(){
    let dom=$('.container').find('.ant-timeline-item-head');
    $(dom).has('i').addClass('ant-timeline-item-head-custom');
  }
}
