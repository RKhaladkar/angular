import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  /* observables are unicast that means used to send dynamic values while 
  subjects are multicast that means send static values or same values to multiple subscibers. */

  sendObs = new Observable((data)=>{
    data.next(1);
    data.next(2);
    data.next('rishikesh');
    setTimeout(()=>{data.complete()},5000)
    data.next("5")
    data.next(this.generateRandomNumbers())
    data.error("something went wrong");
  })
      
 generateRandomNumbers(){
  return Math.random();
 }
  ngOnInit(): void {

     this.sendObs.subscribe((value=>{console.log("subscribed value is= "+value)}))
     //this.sendObs.pipe(map((value)))

    this.sendObs.subscribe (
      {next(value){console.log(value)},
       complete(){console.log('receiving is complete')},
       error(err){console.log(err)}
      }
  )
}
}
