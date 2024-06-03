let fun=()=>
{
    x=document.getElementById("text").value;
    y=document.getElementById("text1").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    let Add=x+y;
    document.getElementById("demo").innerHTML=Add;
}