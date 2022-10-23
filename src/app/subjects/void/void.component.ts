import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-void',
  templateUrl: './void.component.html',
  styleUrls: ['./void.component.scss']
})
export class VoidComponent implements OnInit {

  constructor() { }

voidsubject =new Subject <void> ();


  ngOnInit(): void {

    this.voidsubject.subscribe(()=>{console.log("void subject")});

// this will gives void subject after 3 sec.

    setTimeout(()=>{ this.voidsubject.next() },3000)

  }

 

}
