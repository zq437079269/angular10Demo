import { Component, OnInit } from '@angular/core';
import Hero from '../../../configs/heros'

export interface Hero {
  id:string,
  name:string
}

@Component({
  selector: 'app-ng-ng-for',
  templateUrl: './ng-ng-for.component.html',
  styleUrls: ['./ng-ng-for.component.scss']
})
export class NgNgForComponent implements OnInit {
  value=''
  heros:Hero[]=Hero;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.heros.push({
      id: 'hero_'+Date.now() ,
      name:this.value
    })
    console.log(this.heros,this.value)
  }
  reset() {
    this.heros = [
      {
        id: 'hero_1',
        name: '盖伦4'
      },
      {
        id: 'hero_5',
        name: '赵信5'
      },
      {
        id: 'hero_2',
        name: '嘉文'
      },
      {
        id: 'hero_8',
        name: '易大师6'
      },
      {
        id: 'hero_7',
        name: '泰达米尔7'
      }
    ];
  }

  trackByHero(heros:any): string {
    console.log(heros.id)
    return heros.id;
  }
}
