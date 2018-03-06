import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {route} from "./teacher.routing";
import {TeacherComponent} from "./teacher.component";
import { TeachPlanComponent } from './teach-plan/teach-plan.component';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild(route),
  ],
  providers:[],
  declarations: [TeacherComponent, TeachPlanComponent]
})
export class TeacherModule { }
