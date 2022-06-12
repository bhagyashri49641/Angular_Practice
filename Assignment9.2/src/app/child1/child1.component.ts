import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template: `
  <ul>
    <li>
      {{result}}
  </li>
</ul>
`
  


})
export class Child1Component implements OnInit 
{
  public result:any;
  public no:number=11;

  constructor(public _obj:NumberService) { }

  ngOnInit(): void 
  {
    this.result=this._obj.ChkPrime(this.no);
  }

}
