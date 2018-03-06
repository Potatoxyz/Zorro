import {animate, state, style, transition, trigger} from "@angular/animations";

export function DisplayPic(){
  return trigger('displayPic', [
    state('show', style({transform: 'translateX(0%)'}) ),
    state('hide', style({transform: 'translateX(-100%)'}) ),
    transition('show => hide', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),
    transition('hide => show', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ])
  ]);
}
