import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {JwtService} from "../../../shared/jwt.service";
import {Router} from "@angular/router";
import {AlertMessageComponent} from "../components/alert-message/alert-message.component";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent extends AlertMessageComponent implements OnInit {
  validateForm: FormGroup;
  loading:boolean=false;
  constructor(private fb: FormBuilder,
              private loginService:LoginService,
              private jwt:JwtService,
              private Router:Router,
              messageService:NzMessageService
  ) {super(messageService)}

  ngOnInit() {
    if(this.jwt.getToken()){
      this.Router.navigateByUrl('/pages/index');
    }
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
  _submitForm() {
    console.log(this.validateForm.value);
   if(this.validateForm.value.userName=='10086'&&this.validateForm.value.password=='123123'){
      let u=this.validateForm.value.userName;
      let p=this.validateForm.value.password;
      let r=this.validateForm.value.remember;
      let body={userName:this.validateForm.value.userName,password:this.validateForm.value.password};
      console.log( this.jwt.getToken());
      this.loginService._DoLogin(body).subscribe(data=>{
        console.log(data);
        this.Router.navigateByUrl('/pages/index');
        this.jwt.saveToken(data.result);
        this.loading=false;
      },err=>{
        this.loading=false;
        this.handError(err);
      });
   }
  }
}
