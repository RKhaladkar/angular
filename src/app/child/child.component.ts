import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()x:any;
  @Input()names:any;
  @Input()y:any;
  @Input()add1:any
  @Output()childevent=new EventEmitter<any>();
result:any
  constructor() { }

  ngOnInit(): void {
    this.childevent.emit("this msg from child")
  }

  onclick(){
 this.names.push(this.add1)
  }
}
