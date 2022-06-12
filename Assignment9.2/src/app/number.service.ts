import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }

  public ChkPrime(Number:number):any
  {
    for(let i = 2; i <= (Number/2); i++)
    {
      if((Number%i)==0)
      {
        return false;
      }
    }
    return true;
  }
}

