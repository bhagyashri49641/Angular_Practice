//fibonacy series
//ip:21
//op:0 1 1 2 3 5 8 13 21
var num:number=21;

function fibo(num:number):void
{
    var x=0;
    var y=1;
    var z=0;
    var i=1;
    console.log(x +" "+ y);
    while(i <= num)
    {
        z=x+y;
        console.log(z);
        if(z == num)
        {
            break;
        }
        x=y;
        y=z;
        i=z;
    }
}
fibo(num);