/*
3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
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

class CircleX extends Circle{

	circumferance()
	{
		return 2*this.PI*this.Radius;
	}

}

var obj=new CircleX(15);
var circumObj:any =obj.circumferance();
console.log(circumObj);