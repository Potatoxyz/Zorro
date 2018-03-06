import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NzCarouselComponent} from "ng-zorro-antd";

@Component({
  selector: 'app-display-pic',
  templateUrl: './display-pic.component.html',
  styleUrls: ['./display-pic.component.scss']
})
export class DisplayPicComponent implements OnInit,AfterViewInit {
  @ViewChild(NzCarouselComponent) Carousel:NzCarouselComponent;
  array = [ 1, 2, 3, 4 ];
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    let d=document.activeElement;
    d.addEventListener('keydown', (e:KeyboardEvent)=>{
      //arrow-left
      if(e.keyCode==37){
        this.Carousel.nzSlickPrev();
      }
      if(e.keyCode==39){
        this.Carousel.nzSlickNext();
      }
    });
  }

}
