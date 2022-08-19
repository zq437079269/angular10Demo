import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl',
  templateUrl: './tpl.component.html',
  styles: [
  ]
})
export class TplComponent implements OnInit {
  fontsize=14;
  constructor() { }

  ngOnInit(): void {
  }
  getValue(e:string){
    console.log(e)
  }
}
