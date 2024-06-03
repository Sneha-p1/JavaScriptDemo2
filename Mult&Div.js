function fun()
{
    x=document.getElementById("text").value;
    y=document.getElementById("text1").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    let Mul = x*y;
    document.getElementById("demo").innerHTML=Mul;
}
function fun1()
{

    a=document.getElementById("text2").value;
    b=document.getElementById("text3").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let Div = a/b;
    document.getElementById("demo1").innerHTML=Div;
}