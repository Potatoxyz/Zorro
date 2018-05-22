import {Injectable} from "@angular/core";

@Injectable()
export class AuthService{
  constructor(){
  }
  saveAuth(auth){
    localStorage.setItem('auth',auth);
  }
  delAuth(){
    localStorage.removeItem('auth');
  }
  getAuth(){
    return localStorage.getItem('auth');
  }
}
