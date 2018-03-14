import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanComponent} from "./plan/plan.component";
import {DisplayPicComponent} from "./display-pic/display-pic.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [PlanComponent,DisplayPicComponent, AlertMessageComponent],
  exports:[PlanComponent,DisplayPicComponent,AlertMessageComponent]
})
export class ComponentsModule { }
