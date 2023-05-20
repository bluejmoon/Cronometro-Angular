import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent {
  segundos:number=0;
  @Input()inicio:number=0;
  @Output()multiploDe10=new EventEmitter();

  ngOnInit(){
    this.segundos = this.inicio;
    setInterval(()=>{
      this.segundos--;
      if(this.segundos%10==0)
      this.multiploDe10.emit(this.segundos);
    },1000)
  }
}
