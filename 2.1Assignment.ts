//Find maximum from from array
//ip:23 89 6 29 56 45 77 32
//op: maximum number is: 89
var myArr:number[]=[23, 89, 6,29,56,45,77,32];
var iRet=max(myArr);
console.log("maximum number is:" + iRet);
function max(arr:number[]):number
{ 
    var maxNum=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i]>maxNum)
        {
            console.log("Indise if");
            maxNum=arr[i];
        }
    }
    return maxNum;
}