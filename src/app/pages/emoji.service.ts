import {Injectable} from "@angular/core";
import {ValueModel} from "../../shared/Model/valueModel";

@Injectable()
export class EmojiService{
  emojis:Array<ValueModel>=[
    {value:':smile:',text:'微笑'},
    {value:':blush:',text:'腼腆'},
    {value:':heart_eyes:',text:'色色'},
    {value:':kissing_heart:',text:'抛心'},
    {value:':flushed:',text:'懵逼'},
    {value:':stuck_out_tongue_closed_eyes:',text:'调皮'},
    {value:':pensive:',text:'失落'},
    {value:':fearful:',text:'惊慌'},
    {value:':joy:',text:'笑哭'},
    {value:':sob:',text:'流泪'},
    {value:':scream:',text:'尖叫'},
    {value:':rage:',text:'生气'},
    {value:':mask:',text:'不想说话'},
    {value:':sunglasses:',text:'帅'},
    {value:':sweat:',text:'擦汗'},
  ];
}
