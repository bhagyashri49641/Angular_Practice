// Finding area of circle
//ip: 5
//op:78.5


var radius:number=5;
var area:number=0;
var PI:number=3.14;
var fRet:number=0;
fRet=Area(radius);
console.log("Area of crcle is:"+ fRet);

function Area(Radius:number)
{
    area=PI*radius*radius;
    return area;
}
