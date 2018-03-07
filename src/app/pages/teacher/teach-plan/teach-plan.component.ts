import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TeachPlanService} from "./teach-plan.service";
@Component({
  selector: 'app-teach-plan',
  templateUrl: './teach-plan.component.html',
  styleUrls: ['./teach-plan.component.scss']
})
export class TeachPlanComponent implements OnInit,AfterViewInit {
  plans:Array<any>=[];
  constructor(private p:TeachPlanService) {
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
  ngAfterViewInit(){
    let dom=$('.container').find('.ant-timeline-item-head');
    $(dom).has('i').addClass('ant-timeline-item-head-custom');
  }
}
