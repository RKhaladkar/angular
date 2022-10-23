import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  onsubmit(){
    alert("form submitted")
  }
  constructor(private _router:Router, private activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onclick(){
    this._router.navigateByUrl('mylogin')
  }

}
