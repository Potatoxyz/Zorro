import {Route, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {IndexComponent} from "./index/index.component";
import {UploadComponent} from "./upload/upload.component";
import {LoginComponent} from "./login/login.component";

export let route:Routes=[
  {
    path:'pages',
    component:PagesComponent,
    children:[
    {path:'index',component:IndexComponent},
    {path:'upload',component:UploadComponent},
    ]
  },
  {
    path:'login',component:LoginComponent
  }
];
