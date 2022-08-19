import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  //input 只由外部确定
  //提供别名，内部可使用show 外部使用Onshow
  // @Input('Onshow') show=false
  @Input() show=false
  @Input() title=''
  @Input() confirmLable='确定'
  @Input() cancelLabel='取消'
  // void 表示不需要参数
  @Output() close=new EventEmitter<void>();
  @Output() OnbackdropClick=new EventEmitter<void>();
  @Output() Onconfirmd=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(e:string,event:MouseEvent):void{
    console.log('onClick',e)
    console.log('onClickEvent',event)
  }
  clickParent(){
    console.log('parent')
  }
  clivkChild(e:MouseEvent){
    //阻止冒泡
    e.stopPropagation()
    console.log('Child')
  }

  onInput(e: Event){
    console.log('input', (e.target as HTMLInputElement).value)
  }
  onClose(){
    this.close.emit()
  }
  backdropClick(){
    this.OnbackdropClick.emit()
  }
  Onconfirm(){
    this.Onconfirmd.emit()
  }
}
