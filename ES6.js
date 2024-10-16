
// var est de scope fonction (portée fonction)

function exampleVar(){

var x=5;

if(true){
    var x=10;
    console.log("la valeur à l'intérieur " + x); 
}

console.log("la valeur de x en dehors de la condition " + x);

}

exampleVar(); 


// let est de scope bloc (portée bloc)


function exampleLet(){
    let y=5;

if(true){
    let y=10;
    console.log("la valeur à l'interérieur " + y); 
}

console.log("la valeur de x en dehors de la condition " + y);
}


exampleLet();

// const est de scope bloc (portée bloc)

function exampleConst(){

    const z=5;

    console.log("la valeur de z " + z);

    // z=10; // erreur car on ne peut pas réaffecter une valeur à une constante

}