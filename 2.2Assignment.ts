//summation of all elements in an array
//ip:23 6 7 4 5 7
//op:52

var myArr:number[]=[23,6,7,4,5,7];
var iRet=SumOfNum(myArr);
console.log("sum of all array elements is:" + iRet);
function SumOfNum(arr:number[]):number
{ 
    var numsum=0;
    for(let i=0;i<arr.length;i++)
    {
        numsum=numsum+arr[i];
    }
    return numsum;
}