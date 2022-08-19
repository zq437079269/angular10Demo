import {Component, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";
import {TransferItem} from "./demos/components/transfer-panel/types";

@Component({
  selector: 'app-root',
  // template:`<h1 class="title">{{title}}</h1>
  // <p>{{name}}</p>
  // `,
  // styles:[`
  //
  // `]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular10';
  showModal=false
  size=16
  list:TransferItem[]=[];
  //private 私有变量 只在内部使用
  //可调取ngModel内置方法及属性
  @ViewChild(NgModel) private ngModel:any;
//   name='我丢！ ';
//   price=30;
//   gender=0
//   //ES6语法，在类里 get方法使方法变为变量 可直接使用
//   get job():string{
//     return  '哈哈哈'
//   }
//   getVal():number{
//     return 33;
// }
  madaoSrc='../assets/madao.jpg'
  customTitle = 'bbb';
  user2={
    name:'madao',
    pic:'../assets/madao.jpg'
  }
  isPrimary=true
  btnCls='btn btn-primary'
  btnCls2=['btn','btn-info']
  btnCls3={
     btn:true,
    'btn-secondary':true
  }

  style1 = 'width: 200px;height: 50px;text-align: center;border: 1px solid;';
  style2 = ['width', '200px', 'height', '50px', 'text-align', 'center', 'border', '1px solid']; // 有问题
  style3 = {
    color:'red',
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid',
    backgroundColor:'#ff7632'  //background-color也可以
  };
  onClose(){
    this.showModal=false
  }
  //点击确定后续操作的方法
  confirm(){
    console.log('点击了确定')
  }
  // changes(e:number){
  //  this.size=e
  // }
  constructor(
  ) {
    this.setList()
  }

 private  setList(){
    this.list = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0,
      });
    }
  }
  resect(){
    this.setList()
  }
  onchange(selecteds:TransferItem[]){
    console.log(selecteds)
  }
}
