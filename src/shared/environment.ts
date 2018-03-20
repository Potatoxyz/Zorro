import {Injectable} from "@angular/core";

@Injectable()
export class Environment{
  loginUrl:string='http://localhost:3000/server/login';
  uploadPDF:string='http://localhost:3000/server/upload';
  uploadHomework:string='http://localhost:3000/server/uploadHomework';
}
