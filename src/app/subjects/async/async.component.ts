import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  constructor() { }

asyncSubject = new AsyncSubject();

  ngOnInit(): void {

    this.asyncSubject.subscribe(value=>{console.log("Async Values 1 is  "+value)})

// async subject always required to have complete notifiv=cation so as to execute it 

    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    
   // this.asyncSubject.complete()

    this.asyncSubject.subscribe(value=>{console.log("Async Values 2 is "+value)})
    this.asyncSubject.next(4);
    this.asyncSubject.complete()
  }

}
