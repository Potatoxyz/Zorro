import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TeachPlanService} from "./teach-plan.service";
import {NzModalService} from "ng-zorro-antd";
import {planItemModel} from "../../components/plan/plan.component";

@Component({
  selector: 'app-teach-plan',
  templateUrl: './teach-plan.component.html',
  styleUrls: ['./teach-plan.component.scss']
})
export class TeachPlanComponent implements OnInit, AfterViewInit {
  plans: Array<planItemModel> = [];
  _start: { startTime: Date, startDate: Date } = {startTime: null, startDate: null};
  _end: { endDate: Date, endTime: Date } = {endDate: null, endTime: null};
  text: string;

  isVisible: boolean = false;
  isConfirmLoading = false;
  modalTitle: string = '添加新计划';

  constructor(private p: TeachPlanService,
              private modalService: NzModalService) {
    this.plans = p.plans;
  }

  ngOnInit() {
  }

  _getPlanDel(id: number) {
    let index = this.plans.findIndex(v => v.id == id);
    this.plans.splice(index, 1);
    console.log(id);
  }

  _getPlanEdit(id: number) {
    console.log(id);
  }

  handleOk() {
    if (this._start.startDate == null || this._start.startTime == null||this._end.endTime==null||this._end.endDate==null) {
      this.modalService.error({title: '错误', content: '时间不能为空!',zIndex:1001});
    }
    else{
      let newStart = new Date();
      newStart.setFullYear(this._start.startDate.getFullYear(), this._start.startDate.getMonth(), this._start.startDate.getDate());
      newStart.setHours(this._start.startTime.getHours(), this._start.startTime.getMinutes());
      let newEndDate = new Date();
      newEndDate.setFullYear(this._end.endDate.getFullYear(), this._end.endDate.getMonth(), this._end.endDate.getDate());
      newEndDate.setHours(this._end.endTime.getHours(), this._end.endTime.getMinutes());
      let newText = this.text;
      console.log(this.text);
      if (newStart.getTime() > newEndDate.getTime()) {
        this.modalService.error({title: '错误', content: '开始时间不能小于结束时间!',zIndex:1001});
      }
      else if(newText==''){
        this.modalService.error({title: '错误', content: '计划内容不能为空!',zIndex:1001});
      }
      else{
        this.isVisible = false;
        this.plans.push({id:Math.random()*100,statu:'undone',text:newText,StartTime:newStart,EndTime:newEndDate});
      }
    }
  }

  openAddPlanModal() {
    this.isVisible = true;
    this._start={startTime:null,startDate:null};
    this._end={endDate:null,endTime:null};
    this.text='';
  }

  ngAfterViewInit() {
    let dom = $('.container').find('.ant-timeline-item-head');
    $(dom).has('i').addClass('ant-timeline-item-head-custom');
  }
}
