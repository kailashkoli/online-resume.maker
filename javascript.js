function addNewWEField(){
    // console.log("Adding new field");
let newNode=document.createElement('textarea')
newNode.classList.add("form-control");
newNode.classList.add("wefield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let weOb=document.getElementById("we");
let weaddbuttonOb=document.getElementById("weaddbutton");

weOb.insertBefore(newNode,weaddbuttonOb);

}
function addNewAQField(){
    // console.log("Adding new field");
let newNode=document.createElement('textarea')
newNode.classList.add("form-control");
newNode.classList.add("aqfield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let aqOb=document.getElementById("aq");
let aqaddbuttonOb=document.getElementById("aqaddbutton");

aqOb.insertBefore(newNode,aqaddbuttonOb);

}
 function generateCV(){
    let namefield=document.getElementById("namefield").value;
    let namet1=document.getElementById('namet1');
    namet1.innerHTML=namefield;


    document.getElementById('namet2').innerHTML=namefield;
    document.getElementById('contactt').innerHTML=document.getElementById("contactField").value;
    document.getElementById('addresst').innerHTML=document.getElementById("addressField").value;
    document.getElementById('fbt').innerHTML=document.getElementById("facebookfield").value;
    document.getElementById('instat').innerHTML=document.getElementById("instafield").value;
    document.getElementById('linkedt').innerHTML=document.getElementById("linkedInField").value;

    document.getElementById('Objectivet').innerHTML=document.getElementById("Objectivefield").value;

    let wes= document.getElementsByClassName("wefield");

    let str = "";

    for (let e of wes)
     {
        str= str+`<li> ${e.value}</li>`;
    }
    document.getElementById("wet").innerHTML=str;

    let wes1= document.getElementsByClassName("aqfield");

    let str1 = "";

    for (let e of wes1)
     {
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';


   
 } 
    function printCV(){
        window.print();
    }