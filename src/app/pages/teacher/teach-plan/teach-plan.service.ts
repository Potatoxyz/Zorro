import {Injectable} from "@angular/core";
import {planItemModel} from "../../components/plan/plan.component";

@Injectable()
export class TeachPlanService{
  plans:Array<planItemModel>=[
    {id:1,StartTime:new Date(2018,3,7,17,22),EndTime:new Date(2018,3,7,17,55),text:'begin first chapter',statu:'finished'},
    {id:2,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'begin second chapter',statu:'finished'},
    {id:3,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'begin second chapter',statu:'doing'},
    {id:4,StartTime:new Date(2018,3,8,12,22),EndTime:new Date(2018,3,7,16,25),text:'begin second chapter',statu:'undone'},
  ];
  constructor(){
  }
}
