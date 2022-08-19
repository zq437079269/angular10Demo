import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TransferItem} from "./types";

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit, OnChanges {
  @Input() list: TransferItem[] = [];
  @Input() seach=false;
  @Output() change = new EventEmitter<TransferItem[]>()
  showList: TransferItem[] = [];
  selects: TransferItem[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    const {list}=changes
    if(list){
      this.showList=list.currentValue.slice()
      this.selects=this.list.filter(item=>item.checked)
    }
    }

  ngOnInit(): void {
  }
  onInput(event:Event){
    const {value}=(event.target as HTMLInputElement)
    this.showList=this.list.filter(item=>item.value.includes(value))
  }

  // setList(){
  //   this.list = [];
  //   const prefix = 'item' + Date.now().toString().slice(-3);
  //   for (let i = 0; i < 20; i++) {
  //     this.list.push({
  //       key: prefix + '_' + i,
  //       value: `${prefix}${i + 1}`,
  //       checked: i % 6 === 0,
  //     });
  //   }
  // }
  itemClick(target:TransferItem){
    const index = this.targetIndex(target.key)
    if(index>-1){
      this.selects.splice(index,1)
    }else {
      this.selects.push(target)
    }
    this.change.emit(this.selects)
  }
  targetIndex(key:string):number{
    return this.selects.findIndex(item=>item.key===key)
  }
}
