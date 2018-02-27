import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {JwtService} from "./jwt.service";

@Injectable()
export class ApiService{
  header:any;
  constructor(private http:HttpClient,private jwtService:JwtService){
    this.header={
      'Authorization': jwtService.getToken()
    };
  }
  post(url:string,body:any):Observable<Object>{
      return this.http.post(url,body);
  }
}
