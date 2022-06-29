//chkStr function checks one string in present in given string or not
//ip: piyush khairnar marvellous infosystems   second ip: marvellous
//op: string contains marvellous in it.

let str1 = new String("piyush khairnar marvellous infosystems");
var Ret=-1;

Ret =str1.indexOf("marvellous");
if(Ret == -1)
{
    console.log("String is not present");
}
else{
    console.log("String is present");
}
