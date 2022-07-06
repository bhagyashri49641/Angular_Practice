/*
1. Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.
*/

class Arithmetic{
    Number1:number=0;
    Number2:number=0;

    constructor(No1:number,No2:number)
    {
        this.Number1=No1;
        this.Number2=No2;
    }

     Addition():any
    {
        return this.Number1+this.Number2;
    }
     subtraction():any
    {
        return this.Number1-this.Number2;
    }
     Multiplication()
    {
        return this.Number1 * this.Number2;
    }
     Division()
    {
        return this.Number1 / this.Number2;
    }
}
var obj=new Arithmetic(10,15);
var value:any = obj.Addition();
console.log(value);
var value:any =obj.subtraction();
console.log(value);
var value:any =obj.Multiplication();
console.log(value);
var value:any =obj.Division();
console.log(value);