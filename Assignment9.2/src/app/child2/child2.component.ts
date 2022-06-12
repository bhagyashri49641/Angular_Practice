import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `
  <ul>
    <li>
        {{count}}
    </li>
  </ul>
  `
})
export class Child2Component implements OnInit 
{
  public count:any;
  public str:String="BhaGYaShrI";

  constructor(public _obj:StringService) { }

  ngOnInit(): void
  {
    this.count=this._obj.CountCapital(this.str);
  }

}
