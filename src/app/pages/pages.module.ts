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
import {ConverLinkDirective} from "./converLink.pipe";
import {ComponentsModule} from "./components/components.module";
import { LeaveMessageComponent } from './leave-message/leave-message.component';
import {Ng2EmojiModule} from 'ng2-emoji';
import {EmojiService} from "./emoji.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Environment} from '../../shared/environment';
import { HandinWorkComponent } from './handin-work/handin-work.component';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    Ng2EmojiModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forChild(route),
  ],
  providers:[ApiService,JwtService,PagesRoutingGuard,EmojiService,Environment],
  declarations: [ConverLinkDirective,PagesComponent,IndexComponent,
    UploadComponent, LoginComponent, LeaveMessageComponent, HandinWorkComponent ]
})
export class PagesModule { }
