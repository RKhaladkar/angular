import { Component, OnChanges, OnInit } from '@angular/core';
import { UserdetailsService } from '../services/userdetails.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements 

OnInit { 

  num1:any
  num2:any
  num3:any
  
  constructor(private user1:UserdetailsService) {}
  ngOnInit(): void {}

  add(){this.num3=this.num1+this.num2;}
  sub(){this.num3=this.num1-this.num2;}
  mul(){this.num3=this.num1*this.num2;}
  div(){this.num3=this.num1/this.num2;}


  
}
