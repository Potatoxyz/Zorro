import {ApiService} from "../../../shared/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
@Injectable()
export class LoginService{
  loginUrl;registerUrl;
  constructor(private api:ApiService){
    this.loginUrl=environment.loginUrl;
    this.registerUrl=environment.registerUrl;
  }
  _DoLogin(body:any):Observable<any>{
    return this.api.post(this.loginUrl,body);
  }
  _DoRegister(body:any):Observable<any>{
    return this.api.post(this.registerUrl,body);
  }
}
