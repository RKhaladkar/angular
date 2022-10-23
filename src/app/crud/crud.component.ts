import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../services/userdetails.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private _userservice: UserdetailsService) { }

  ngOnInit(): void { this.getInfo() }

  getInfo() {
    this._userservice.getname().subscribe((response)=>{console.log('response'+response)})
    }
  }

