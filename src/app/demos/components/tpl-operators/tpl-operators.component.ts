import { Component, OnInit } from '@angular/core';
import {Hero} from "../ng-ng-for/ng-ng-for.component";

@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styles: [
  ]
})
export class TplOperatorsComponent implements OnInit {
 title='aBc';
  obj = {
    name: 'aaa',
    time: '1980-02-25T05:00:00.000Z',
    price: '$333'
  };
  now=Date.now()
  hero: Hero | undefined;
  name!: string | null;
  constructor() {
    setTimeout(()=>{
      this.hero={
        id:'hero1',
        name:'zjamhs'
      }
    },1000)
  }

  ngOnInit(): void {
    const heroName:string=this.name!;
  //  以上写法相当于下面写法
  //  if(this.name){
    //  const heroName:string=this.name
    //  }
  }

}
