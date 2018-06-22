import {Injectable} from "@angular/core";

@Injectable()
export class Environment{
  loginUrl:string='http://localhost:8080/server/login';
  registerUrl:string='http://localhost:8080/server/register';
  uploadPDF:string='http://localhost:8080/server/upload';
  uploadHomework:string='http://localhost:8080/server/uploadHomework';
}
