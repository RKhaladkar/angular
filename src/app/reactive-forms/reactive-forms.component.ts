import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}

  profile=new FormGroup({ 
    employee_name: new FormControl('',Validators.required),
  employee_code:new FormControl('',Validators.required),
  department: new FormControl('',Validators.required),
  Mobile_no:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
  Email:new FormControl('',Validators.required),
  address:new FormGroup({
    lane:new FormControl(''),
    city: new FormControl('')
  }),
  passward:new FormControl('',[Validators.maxLength(6),Validators.minLength(4)]),
  confirm_passward:new FormControl('',[Validators.maxLength(6),Validators.minLength(4)])

  })
  employee:any=[{
    employee_name: 'Vaibhav',
    employee_code:1045,
    department: "QC",
    Mobile_no:6589456245,
    Email:'vk@gmail.com'
  },
  {
    employee_name: 'Rihan',
    employee_code:2145,
    department: "Design",
    Mobile_no:8794136245,
    Email:'rihanm@gmail.com'
  },
  {
    employee_name: 'Priya',
    employee_code:6589,
    department: "R&D",
    Mobile_no:9578459862,
    Email:'pt@gmail.com'
  }
  ]
    reset(){console.log(this.profile.controls)}

  update(){
    console.log(this.profile)
    this.profile.markAllAsTouched();
    
    if(this.profile.valid){
      console.log(this.profile)
      console.log(this.profile.value.Mobile_no)
    }
    else{
     " Please enter required fields"
    }
    this.profile.patchValue({
      
    })

  }
  onmouseover(){ }
  disable=false
passward1:any
passward2:any

  onenter(){}

  editdata(data:any){
    console.log(data)
    this.profile.patchValue({
      employee_name: data.employee_name,
      employee_code:data.employee_code,
      department: data.department,
      Mobile_no:data.Mobile_no,
      Email:data.Email
    })
  }
}
