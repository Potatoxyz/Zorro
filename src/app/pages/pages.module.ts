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

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(route,{enableTracing:true,useHash:true}),
  ],
  providers:[ApiService,JwtService,PagesRoutingGuard],
  declarations: [PagesComponent,IndexComponent, UploadComponent, LoginComponent]
})
export class PagesModule { }