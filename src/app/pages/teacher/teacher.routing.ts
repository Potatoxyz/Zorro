import {Route, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher.component";
import {TeachPlanComponent} from "./teach-plan/teach-plan.component";

export let route:Routes=[
  {
    path:'',component:TeacherComponent,
    children:[
      {path:'teacher-plan',component:TeachPlanComponent}
    ]
  }
];
