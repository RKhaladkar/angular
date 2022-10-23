import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  //template:`<div>hi tejas</div>
  //<p>hi all</p>`,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
   angular:string="hello from interpolation"
  daycheck=false
 
  constructor(private _router: Router, private _activatedroute:ActivatedRoute) {}

  ngOnInit(): void {}

  onclick(){
    this._router.navigateByUrl('/mylogin')
  }

  employee=[{empname:'rk',empcode:1013},{empname:'vk',empcode:1018}]
}


