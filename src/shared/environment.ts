import {Injectable} from "@angular/core";

@Injectable()
export class Environment{
  loginUrl:string='http://localhost:80/server/login';
  registerUrl:string='http://localhost:80/server/register';
  uploadPDF:string='http://localhost:80/server/upload';
  uploadHomework:string='http://localhost:80/server/uploadHomework';
}
