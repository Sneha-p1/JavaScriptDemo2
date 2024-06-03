function Sum()
{
    let a=document.getElementById("text").value;
    let b=document.getElementById("text1").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let Sum = a+b;
    document.getElementById("demo").innerHTML=Sum;


}