import {ApiService} from "../../../shared/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Environment} from "../../../shared/environment";
@Injectable()
export class LoginService{
  url;
  constructor(private api:ApiService,private ev:Environment){
    this.url=ev.loginUrl;
  }
  _DoLogin(body:any):Observable<any>{
    return this.api.post(this.url,body);
  }
}
