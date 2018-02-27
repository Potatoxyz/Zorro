import {Injectable} from "@angular/core";

@Injectable()
export class JwtService{
  constructor(){
  }
  saveToken(token){
    localStorage.setItem('jwt-Token',token);
  }
  delToken(){
    localStorage.removeItem('jwt-Token');
  }
  getToken(){
    return localStorage.getItem('jwt-Token');
  }
}
