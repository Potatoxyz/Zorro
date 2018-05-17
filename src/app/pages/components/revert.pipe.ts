import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'revert'})
export class RevertPipe implements PipeTransform{
  constructor(){

  }
  transform(list:any){
    return list.sort((m,n)=> n.id-m.id);
  }
}
