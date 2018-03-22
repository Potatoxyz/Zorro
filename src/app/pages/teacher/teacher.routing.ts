import {Route, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher.component";
import {TeachPlanComponent} from "./teach-plan/teach-plan.component";
import {HomeworkComponent} from "./homework/homework.component";
export let route:Routes=[
  {
    path:'',component:TeacherComponent,
    children:[
      {path:'teacher-plan',component:TeachPlanComponent},
      {path:'homework',component:HomeworkComponent},
    ]
  }
];
