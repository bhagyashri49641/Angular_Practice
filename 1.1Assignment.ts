//Maximum out of three numbers
//ip: 23, 89,6
//op: 89
//
var val1:number=23;
var val2:number=89;
var val3:number=6;

var max:number=0;
var iRet:number;
iRet = maximum(val1,val2,val3);
console.log("Max value is: "+iRet);
function maximum(no1:number ,no2:number, no3:number):number
{
    if(no1>no2 && no1>no3)
    {
        max=no1;
    }
    else if(no2>no1 && no2>no3)
    {
        max=no2;
    }
    else
    {
        max=no3;
    }
    return max;
}