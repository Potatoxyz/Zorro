import {ApiService} from "../../../shared/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Environment} from "../../../shared/environment";
@Injectable()
export class LoginService{
  loginUrl;registerUrl;
  constructor(private api:ApiService,private ev:Environment){
    this.loginUrl=ev.loginUrl;
    this.registerUrl=ev.registerUrl;
  }
  _DoLogin(body:any):Observable<any>{
    return this.api.post(this.loginUrl,body);
  }
  _DoRegister(body:any):Observable<any>{
    return this.api.post(this.registerUrl,body);
  }
}
