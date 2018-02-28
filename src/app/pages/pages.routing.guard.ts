import {ActivatedRoute, CanActivate, CanActivateChild, Route, Router, Routes} from "@angular/router";
import {JwtService} from "../../shared/jwt.service";
import {Injectable} from "@angular/core";
@Injectable()
export class PagesRoutingGuard implements CanActivateChild  {
  constructor(private jwt:JwtService,private Router:Router){
  }
  canActivateChild ():boolean{
    let token= this.jwt.getToken();
    if(token){
      return true;
    }
    else{
      this.Router.navigateByUrl('/login');
      return false;
    }
  }
}
