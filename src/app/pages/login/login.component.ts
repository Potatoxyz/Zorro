import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {JwtService} from "../../../shared/jwt.service";
import {Router} from "@angular/router";
import {AlertMessageComponent} from "../components/alert-message/alert-message.component";
import {NzMessageService} from "ng-zorro-antd";
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent extends AlertMessageComponent implements OnInit {
  validateForm: FormGroup;
  validateForm1: FormGroup;
  loading:boolean=false;
  constructor(private fb: FormBuilder,
              private loginService:LoginService,
              private jwt:JwtService,
              private auth:AuthService,
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
    this.validateForm1 = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      password1: [ null, [ Validators.required ] ],
    });
  }
  _submitForm() {
      console.log(this.validateForm.value);
      let u=this.validateForm.value.userName;
      let p=this.validateForm.value.password;
      let r=this.validateForm.value.remember;
      let body={userName:u,password:p};
      this.loginService._DoLogin(body).subscribe(data=>{
        console.log(data);
        this.auth.delAuth();
        this.auth.saveAuth(data.message);
        this.Router.navigateByUrl('/pages/index');
        this.jwt.saveToken(data.result);
        this.loading=false;
      },err=>{
        this.loading=false;
        console.log(err);
        this.handError(err);
      });
  }
  doRegister(){
    let u=this.validateForm1.value.userName;
    let p=this.validateForm1.value.password;
    let body={userName:u,password:p,role:'student'};
    this.loginService._DoRegister(body).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.alertSuccess(data.message)
      }
      this.loading=false;
    },err=>{
      this.loading=false;
      this.handError(err);
    });
  }
  toggleForm(code){
    if(code){
      $('.register-form').css({"left":"50%"});
      $('.login-form').css({"left":"-150%"});
    }
    else{
      $('.register-form').css({"left":"150%"});
      $('.login-form').css({"left":"50%"});
    }
  }
}
