// display factors of given number
//ip:20
//op: 1 2 4 5 10
var num:number=20;

Factors(num);

function Factors(num:number):void
{
    for(let i=1;i<=num/2;i++)
    {
        if((num%i) == 0)
        {
            console.log(i);
        }
    }
}