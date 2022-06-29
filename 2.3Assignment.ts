//Find second maximum from from array
//ip:23 89 6 29 56 45 77 32
//op: maximum number is: 89

var myArr:number[]=[23,89,6,29,56,45,67,32];
var maximumNum:number=0;
var secondMax:number=0;
var iRet:number=secondMaximum(myArr);
console.log("second maximum number is "+iRet);
function secondMaximum(arr:number[]):number{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>maximumNum)
        {
            maximumNum=arr[i];
        }
        if((arr[i]<maximumNum)&&(arr[i]>secondMax))
        {
            secondMax=arr[i];
        }
    }
    return secondMax;
}