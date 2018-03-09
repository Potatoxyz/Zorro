import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanComponent} from "./plan/plan.component";
import {DisplayPicComponent} from "./display-pic/display-pic.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [PlanComponent,DisplayPicComponent],
  exports:[PlanComponent,DisplayPicComponent]
})
export class ComponentsModule { }
