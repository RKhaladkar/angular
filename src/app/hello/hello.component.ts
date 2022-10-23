import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor( private activatedroute1:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
  }
 studentinfo = [{firstname:'rishi',lastname:'khaladkar'},
 {firstname:'gorak',lastname:'kamthe'},
 {firstname:'tejas',lastname:'shinde'}
]

 onclick(index:any){
   let data:any = this.studentinfo[index];
   this.route.navigateByUrl('mylogin')
   this.route.navigate(['/mylogin'],{queryParams:data(JSON.stringify(data))})
 }
}
