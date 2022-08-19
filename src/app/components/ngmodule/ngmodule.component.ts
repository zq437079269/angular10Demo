import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodule',
  templateUrl: './ngmodule.component.html',
  styleUrls: ['./ngmodule.component.scss']
})
export class NgmoduleComponent implements OnInit {
inputValue='22312'
  constructor() { }

  ngOnInit(): void {
  }
  onInput(e: any){
  console.log(e)
  // this.inputValue=e.target.value
  }
}
