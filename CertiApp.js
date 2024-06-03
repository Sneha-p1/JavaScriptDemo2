function Certiapp()
{
    let course=document.getElementById("text").value;
    let id=document.getElementById("text1").value;
    let name=document.getElementById("text2").value;
    let grade=document.getElementById("text3").value;
    let date=document.getElementById("text4").value;
    
    localStorage.setItem("text",course);
    localStorage.setItem("text1",id);
    localStorage.setItem("text2",name);
    localStorage.setItem("text3",grade);
    localStorage.setItem("text4",date);

    let S=localStorage.getItem("text");
    console.log(S);
    let R=localStorage.getItem("text1");
    console.log(R);
    let T=localStorage.getItem("text2");
    console.log(T);
    let U=localStorage.getItem("text3");
    console.log(U);
    let V=localStorage.getItem("text4");
    console.log(V);


}