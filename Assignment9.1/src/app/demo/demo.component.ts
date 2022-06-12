import { Component, OnInit } from '@angular/core';

import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  template: `
  <h2>Inside Demo component ts</h2>
  <ul >
    <li>Addition is: {{Addition}}</li>
    <li>Subtraction is: {{Subtraction}}</li>
  </ul>
  `
  
})
export class DemoComponent implements OnInit 
{

  
  public Number1:number=10;
  public Number2:number=20;
  public Addition=0;
  public Subtraction=0;
  constructor(private _obj: ArithmaticService) 
  {}
  ngOnInit(): void 
  {
    this.Addition=this._obj.Add(this.Number1,this.Number2);
    this.Subtraction=this._obj.Sub(this.Number1,this.Number2);
  }

}
