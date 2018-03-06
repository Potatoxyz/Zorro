import {Route, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {IndexComponent} from "./index/index.component";
import {UploadComponent} from "./upload/upload.component";
import {LoginComponent} from "./login/login.component";
import {PagesRoutingGuard} from "./pages.routing.guard";
import {DisplayPicComponent} from "./components/display-pic/display-pic.component";
import {TeacherComponent} from "./teacher/teacher.component";

export let route:Routes=[
  {
    path:'pages',
    component:PagesComponent,
    canActivateChild:[PagesRoutingGuard],
    children:[
    {path:'index',component:IndexComponent},
    {path:'upload',component:UploadComponent},
    {path:'teacher',loadChildren:'./teacher/teacher.module#TeacherModule'},
    ]
  },
  {
    path:'login',component:LoginComponent
  },

  {path:'',redirectTo:'login',pathMatch:'full'}

];
