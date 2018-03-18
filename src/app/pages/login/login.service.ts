import {ApiService} from "../../../shared/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
@Injectable()
export class LoginService{
  url='http://localhost/server/login';
  constructor(private api:ApiService){
  }
  _DoLogin(body:any):Observable<any>{
    return this.api.post(this.url,body);
  }
}
