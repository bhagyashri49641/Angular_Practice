import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  template: `
  <ul>
    <li>
        number is prime or not : {{result}} <br>
        Count of capital letters is: {{count}}
    </li>
  </ul>
  `
})
export class ChildComponent implements OnInit
 {
  public result:any;
  public no:number=6;
  public count:any;
  public str:String="BhAGYaShrI";


  constructor(public _obj1:NumberService,public _obj2:StringService) { }

  ngOnInit(): void
  {
    
    this.result=this._obj1.ChkPrime(this.no);
    this.count=this._obj2.CountCapital(this.str);
  }
}
