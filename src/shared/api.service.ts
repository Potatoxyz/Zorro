import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {JwtService} from "./jwt.service";

@Injectable()
export class ApiService{
  constructor(private http:HttpClient,private jwtService:JwtService){
  }
  post(url:string,body:any):Observable<Object>{
      let token=this.jwtService.getToken()||'';
      return this.http.post(url,body,{headers:{
        'Authorization': token
      }});
  }
}
