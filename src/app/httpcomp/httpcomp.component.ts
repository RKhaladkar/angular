import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
@Component({
  selector: 'app-httpcomp',
  templateUrl: './httpcomp.component.html',
  styleUrls: ['./httpcomp.component.scss']
})
export class HttpcompComponent implements OnInit {

  constructor(private userservice: HttpserviceService) { }

  ngOnInit(): void {  }

  getUserDetails(){
    return this.userservice.getUserInfo().subscribe(response=>{console.log("response: "+response)})
  }
}