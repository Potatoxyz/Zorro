import {Injectable} from "@angular/core";

@Injectable()
export class HomeworkService{
  panels = [
    {
      id:1,
      active: false,
      disabled: false,
      name: '简述地下水化学成分的形成与变化规律',
      time:new Date(2018,2,20,17,19,0),
      content:'包括水化学成分形成的各种因素、水化学成分形成的各种物理化学（包括离子、气体、有机物、微生物及同位素成分）的作用、水中各种元素的来源',
      attachment:'attachment.rar'
    },
    {
      id:2,
      active: false,
      disabled: true,
      name: '地下水中各种元素的迁移作用',
      time:new Date(2018,2,21,17,19,0),
      content:'如元素从矿物和岩浆、气体、生命等物质转移到地下水的过程，元素进入地下水后由于各种因素引起的迁移作用。元素的迁移作用是水文地球化学分带及地下水化学成分变化的制约条件',
      attachment:'attachment.rar'
    },
    {
      id:2,
      active: false,
      disabled: true,
      name: '人类活动对地下水的影响',
      time:new Date(2018,2,23,17,19,0),
      content:'人类的经济技术活动造成水文地球化学异常，并对环境和生态产生重大影响。请查阅资料并举例',
      attachment:'attachment.rar'
    }
  ];
  fileList = [{
    uid: 1,
    name: 'xxx.word',
    status: 'done',
    response: '服务端发生错误', // custom error message to show
    url: 'http://www.baidu.com,'
  }, {
    uid: 2,
    name: 'yyy.word',
    status: 'done',
    url: 'http://www.baidu.com',
  }, {
    uid: 3,
    name: 'zzz.word',
    status: 'error',
    response: '服务端发生错误', // custom error message to show
    url: 'http://www.baidu.com',
  }];
}
