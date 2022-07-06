/*
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/

class Circle
{
    Radius:number;
    PI:number=3.14;

    public constructor(rad:any)
    {
        this.Radius=rad;
    }

    Area():number
    {
        return this.PI*this.Radius*this.Radius;
    }
}


var obj=new Circle(12);
var area:any =obj.Area();
console.log(area);


var obj=new Circle(21);
var area:any =obj.Area();
console.log(area);