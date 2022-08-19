import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let arr = [
      {id: 1, name: '部门1', pid: 0},
      {id: 6, name: '部门6', pid: 0},
      {id: 7, name: '部门7', pid: 0},
      {id: 2, name: '部门2', pid: 1},
      {id: 3, name: '部门3', pid: 1},
      {id: 4, name: '部门4', pid: 3},
      {id: 6, name: '部门5', pid: 4},
      {id: 7, name: '部门5', pid: 4},
      {id: 8, name: '部门5', pid: 4},
      {id: 9, name: '部门5', pid: 4},
      {id: 10, name: '部门5', pid: 2},
      {id: 11, name: '部门5', pid: 4},
      {id: 12, name: '部门5', pid: 4},
      {id: 13, name: '部门5', pid: 4},
      {id: 14, name: '部门5', pid: 4},
      {id: 15, name: '部门5', pid: 4},
      {id: 16, name: '部门5', pid: 4},
      {id: 17, name: '部门5', pid: 4},
      {id: 18, name: '部门5', pid: 4},
      {id: 19, name: '部门5', pid: 4},
    ]
    this.arrayToTree(arr)
  }

    //数据处理成树状结构
    arrayToTree(items:any) {
    const result = [];   // 存放结果集
    const itemMap:any = {};  //
      let i=1
    for (const item of items) {
      const id = item.id;
      const pid = item.pid;
      if (!itemMap[id]) {
        itemMap[id] = {
          children: [],
        }
      }
      itemMap[id] = {
        ...item,
        children: itemMap[id]['children']
      }
      const treeItem =  itemMap[id];
      if (pid === 0) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          }
        }
        console.log(itemMap[pid])
        itemMap[pid].children.push(treeItem)
      }

    }
    console.log(result)
    return result;
  }

}
