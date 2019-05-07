import { Directive,ElementRef,Renderer2 } from '@angular/core';
import {DomController} from '@ionic/angular'


@Directive({
  selector: '[appParallax]' ,
  host:{
    '(ionScroll)':'onCntscroll($event)',
  }

})
export class ParallaxDirective {
  constructor(public el:ElementRef,public re:Renderer2,private domCtrl: DomController) {
  }
  header:any;
  main_cnt:any;
  ta:any;
  ngOnInit() {
    let cnt=this.el.nativeElement
    console.log(cnt)
    this.header=cnt.getElementsByClassName('bg')[0];
    console.log(this.header)
    this.main_cnt=cnt.getElementsByClassName('main-cnt')[0];
    console.log(this.main_cnt)

    // this.re.setStyle(this.header,'webTransformOrigin','center bottom');
    this.re.setStyle(this.header,'background-size','cover');
    this.re.setStyle(this.main_cnt,'position','absolute');
    this.re.setStyle(this.header, 'background-color', 'red')

    
  }
  onCntscroll(ev){
  //   console.log(ev)
  //  ev.domWrite(()=>{
     console.log("scrolling")
     this.update(ev);
  //  });
  }

  update(ev){
    console.log(ev)
    if(ev.detail.scrollTop>0){
      this.ta=ev.detail.scrollTop/2;
    }
    console.log(this.ta)
    this.re.setStyle(this.header,'transform','translate3d(0,'+ this.ta +'px,0) scale(1,1)')
  }
}
