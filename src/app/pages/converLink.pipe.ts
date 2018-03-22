import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'covertLink'})
export class ConverLinkDirective implements PipeTransform{
  constructor(){}
  links=[
    {linkName:'index',text:'首页'},
    {linkName:'upload',text:'上传'},
    {linkName:'teacher',text:'教师'},
    {linkName:'teacher-plan',text:'教学计划'},
    {linkName:'leaveMessage',text:'留言'},
    {linkName:'homework',text:'课后作业'},
    {linkName:'handinWork',text:'提交作业'},
  ];
  transform(value:any){
    console.log(value);
    let r=this.links.find(val=>val.linkName==value);
    if(r){
      value=r.text;
    }
    return value;
  }
}
