//check given number is armstrong number or not
//ip:153
//op:It is armstrongnumber

var num=153;
var ans:boolean=false;
ans=chkArmstrong(num);
if(ans==true)
    {
        console.log("given number is Armstrong number!");
    }
    else{
        console.log("Given number is not armstrong number! :(");
    }
function chkArmstrong(no):boolean
{
    var x=no;
    console.log(x);
    var digit=0;
    var cube=0;
    var sum=0;
    while(x>0)
    {
        digit=x%10;
        cube=digit*digit*digit;
        sum=sum+cube;
        x=Math.floor(x/10);
    }
    if(sum==no)
    {
        return true;
    }
    else{
        return false;
    }

}