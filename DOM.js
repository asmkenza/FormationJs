const titre= document.getElementsByClassName("title");
console.log("Récupération de tous les contenants de la classe title",titre);

const h=document.getElementsByTagName("h1");
console.log("Récupération de tous les éléments selon le nom de la balise",h);

const id=document.getElementById("demo");

document.getElementById("demo").style.color="blue";
console.log("Récupération de l'élément selon l'id",id);
document.getElementById("demo").innerText="Text modifié avec innerHTML";


function salutation(){
    if(id.innerHTML==="Libre Pour tout le monde"){
        id.innerHTML="Bonjour tout le monde"; 
    }else{
        id.innerHTML="Libre Pour tout le monde";
    }
}

id.onclick=salutation;

const bookList=document.querySelector("#Liste-Livres li:nth-child(2) .name");
console.log("L'element récupéré avec le querySelector",bookList);


const mySelector=document.querySelectorAll("#Liste-Livres li .name");
console.log("L'element récupéré avec le querySelectorAll",mySelector);








// document.getElementById("demo").innerHTML="<h2>text modifié avec innerHTML</h2>";





