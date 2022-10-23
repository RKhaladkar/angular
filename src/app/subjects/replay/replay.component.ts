import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {

  constructor() { }

  replaysubject = new ReplaySubject(2);

  ngOnInit(): void {

    this.replaysubject.subscribe(value=>{console.log("replay values 1 : "+value)})

    // it gives 10,20,30 for first subscriber

    this.replaysubject.next(10);
    this.replaysubject.next(20);
    this.replaysubject.next(30);

    this.replaysubject.subscribe(element=>{console.log('replay value 2 :'+element)})
//  as buffer size is 2 it gives 20,30 for second subscriber

    this.replaysubject.next(40);
    this.replaysubject.next(50);

    this.replaysubject.subscribe(element=>{console.log('replay value 3 :'+element)})
    //  as buffer size is 2 it gives 40,50 for third subscriber
  }

}
