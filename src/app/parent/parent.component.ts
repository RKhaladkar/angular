import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  displaymsg: any;

  num1:any
  num2: any

  report = [{ fname: "tejas", lastname: "shinde" },
  { fname: "rishi", lastname: "khaladkar" },
  { fname: "gorak", lastname: "kamthe" }]

  add=[{fname:"danu",lastname:"bide"}]
  constructor() { }
  ngOnInit(): void { }

  listenevent(e: any) {
    this.displaymsg = e;
  }

}
