import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {
  showBlock=false
  showBlock2=false
  constructor() { }

  ngOnInit(): void {
  }

}
