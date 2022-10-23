import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  sub = new Subject();
  ngOnInit(): void {

    // this.sub.subscribe(value=>{console.log("subject value 1 is "+value)})

    // this.sub.next(10);
    // this.sub.next(20);
    // this.sub.next(30);
    // this.sub.next(this.generateRandomNumbers())

    // this.sub.subscribe(data=>{console.log('subject value 2 is '+data)})

    // this.sub.next(40);

    // this.sub.subscribe(val=>{console.log("random 1 "+val)})
    // this.sub.subscribe(random=>{console.log("random 2 is "+random)})
    // this.sub.next(this.generateRandomNumbers())

  }

  generateRandomNumbers(){
    return Math.random();
  }
}
