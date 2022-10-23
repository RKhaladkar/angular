import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  ngAfterContentChecked() {console.log("childcomponent:ngaftercontentchecked")};
  ngAfterViewInit() {console.log("childcomponent:ngafterveiwinit")};
  ngAfterViewChecked() {console.log("childcomponent:ngafterviewchecked")};
  ngOnDestroy() {console.log("childcomponent:ngondestroy")}
  constructor() {console.log("childcomponent:constructor")  }
  ngOnChanges(){console.log("childcomponent:ngonchanges")};
  ngOnInit() {console.log("childcomponent:ngoninit")};
  ngDoCheck(){console.log("childcomponent:ngdocheck")};
  ngAfterContentInit() { console.log("childcomponent:ngaftercontentinit") };
  
}
