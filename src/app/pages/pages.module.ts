import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import {route} from "./pages.routing";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PagesComponent} from "./pages.component";
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import {ApiService} from '../../shared/api.service';
import {JwtService} from "../../shared/jwt.service";
import {PagesRoutingGuard} from "./pages.routing.guard";
import { DisplayPicComponent } from './components/display-pic/display-pic.component';
import {ConverLinkDirective} from "./converLink.pipe";
import { PlanComponent } from './components/plan/plan.component';
import {ComponentsModule} from "./components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild(route),
  ],
  providers:[ApiService,JwtService,PagesRoutingGuard],
  declarations: [ConverLinkDirective,PagesComponent,IndexComponent, UploadComponent, LoginComponent ]
})
export class PagesModule { }
