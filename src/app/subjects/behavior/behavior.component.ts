import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss']
})
export class BehaviorComponent implements OnInit {

  constructor() { }

  behavesubject = new BehaviorSubject(0);
  ngOnInit(): void {

    // first subsciber will always receievs default value i.e.0,1,2,3
    this.behavesubject.subscribe(value=>{console.log("Behavior subject 1 is "+value)})

    this.behavesubject.next(1);
    this.behavesubject.next(2);

    // second subsciber will always receives last updated value i.e.2,3
    this.behavesubject.subscribe(element=>{console.log("Behavior subject 2 is "+element)})
    this.behavesubject.next(3);

  }

}
