// check given number is prime or not
//ip:21
//op:number is not prime
var num:number=21;
function ChkPrime(num:number):void
{
    for(let i=2;i<=num/2;i++)
    {
        if(num%i == 0)
        {
            console.log("number is not prime");
            return;
        }
    }
    console.log("number is prime");
    return;
}
ChkPrime(num);