import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anindya-component',
  templateUrl: './anindya-component.component.html',
  styleUrls: ['./anindya-component.component.css']
})
export class AnindyaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public num1:any;
  public num2:any;
  public num3:any;

  add(){
     this.num3=this.num1+this.num2;
  }
  sub(){
    this.num3=this.num1-this.num2;
  }
  multiply(){
    this.num3=this.num1*this.num2;
  }
  divied(){
    this.num3=this.num1/this.num2;
  }


}
