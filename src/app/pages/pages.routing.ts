import {Route, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {IndexComponent} from "./index/index.component";
import {UploadComponent} from "./upload/upload.component";
import {LoginComponent} from "./login/login.component";
import {PagesRoutingGuard} from "./pages.routing.guard";
import {LeaveMessageComponent} from "./leave-message/leave-message.component";

export let route:Routes=[
  {
    path:'pages',
    component:PagesComponent,
    canActivateChild:[PagesRoutingGuard],
    children:[
    {path:'index',component:IndexComponent},
    {path:'upload',component:UploadComponent},
    {path:'teacher',loadChildren:'./teacher/teacher.module#TeacherModule'},
    {path:'leaveMessage',component:LeaveMessageComponent},
    ]
  },
  {
    path:'login',component:LoginComponent
  },

  {path:'',redirectTo:'login',pathMatch:'full'}

];
