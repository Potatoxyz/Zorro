import {Route, Routes} from "@angular/router";

export let route:Routes=[
  {path:'**',redirectTo:'/login'},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];
