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
      customStyle: {
        'background': '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border': '0px'
      },
      content:'作业一的内容'
    },
    {
      id:2,
      active: false,
      disabled: true,
      name: '作业二',
      time:new Date(2018,2,21,17,19,0),
      customStyle: {
        'background': '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border': '0px'
      },
      content:'作业二的内容'
    }
  ];
  fileList = [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }];
}
