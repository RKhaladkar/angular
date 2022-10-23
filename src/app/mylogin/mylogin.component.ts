import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserdetailsService } from '../services/userdetails.service';


@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.scss']
})
export class MyloginComponent implements OnInit {
place:any
location:any
delete1:any

  constructor(private routing:Router, private activatedrouting:ActivatedRoute, private service: UserdetailsService) { }

username:any='Rishikesh Khaladkar' 

// result:any

  ngOnInit():void{
    this.getdata()

    // this.activatedrouting.queryParamMap.subscribe((param:any)=>{
    //   this.place = param.get('place')
    //   console.log(this.place = param.get('place'))
    //   this.location = param.get('location')
    //   console.log(this.location = param.get('location'))
    //   this.result = JSON.parse(param.data)
    }   

    data = new FormGroup({
    email:new FormControl(),
    passward:new FormControl()
    })    

   getdata(){
    this.service.getname().subscribe((value)=>{console.log(value)
    this.place = value}
    )
    }

    edit(user:any){
      this.data.patchValue({
        email:user.email,
        passward:user.passward
      })
    }
    delete(user:any){
      this.service.deletename(user.id).subscribe((value)=>{this.getdata()}
    )

  // this.getdata()
    }
    update(id:any){
      /* let obj = {
      //   email: this.data.value.email,
      //   password: this.data.value.passward,
      //   id: this.data.id,
      // };
      // this.service.get(this.username.id, obj).subscribe((value) => {
      //   console.log('object of the Put Value' + value);
      //   this.userinfo.reset();
      //   this.gethttpdetails();
      //   this.disbaled = false;
      // });
    }*/
  }}
