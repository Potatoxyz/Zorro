import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {route} from "./teacher.routing";
import {TeacherComponent} from "./teacher.component";
import { TeachPlanComponent } from './teach-plan/teach-plan.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TeachPlanService} from "./teach-plan/teach-plan.service";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../components/components.module";
import {FormsModule} from "@angular/forms";
import {HomeworkComponent} from "./homework/homework.component";
import {UploadComponent} from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild(route),
  ],
  providers:[TeachPlanService],
  declarations: [TeacherComponent, TeachPlanComponent,HomeworkComponent,UploadComponent]
})
export class TeacherModule { }
