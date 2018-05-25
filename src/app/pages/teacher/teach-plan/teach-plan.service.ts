import {Injectable} from "@angular/core";
import {planItemModel} from "../../components/plan/plan.component";

@Injectable()
export class TeachPlanService{
  plans:Array<planItemModel>=[
    {id:1,StartTime:new Date(2018,3,7,17,22),EndTime:new Date(2018,3,7,17,55),text:'提醒12班交作业',statu:'finished'},
    {id:2,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'今天讲到第九章地下水类型',statu:'finished'},
    {id:3,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'下课点名',statu:'doing'},
    {id:4,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'带上教学用具',statu:'undone'},
  ];
  constructor(){
  }
}
