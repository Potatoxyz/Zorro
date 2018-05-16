import {Injectable} from "@angular/core";

@Injectable()
export class HomeworkService{
  panels = [
    {
      id:1,
      active: false,
      disabled: false,
      name: '作业一',
      time:new Date(2018,2,20,17,19,0),
      content:'作业一的内容',
      attachment:'这是作业一的附件'
    },
    {
      id:2,
      active: false,
      disabled: true,
      name: '作业二',
      time:new Date(2018,2,21,17,19,0),
      content:'作业二的内容',
      attachment:'这是作业二的附件'
    }
  ];
  fileList = [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    response: '服务端发生错误', // custom error message to show
    url: 'http://www.baidu.com,'
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    response: '服务端发生错误', // custom error message to show
    url: 'http://www.baidu.com',
  }];
}
