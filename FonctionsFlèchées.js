
function addition(a, b) {
  return a + b;
}

console.log("L'addition des deux nombre (01) est : "+addition(1, 2));


const addition2 = (a, b) => a + b;

console.log("L'addition des deux nombre (02) est : "+addition2(1, 2));



const BonsoirToutLeMonde = () => console.log("Bonsoir tout le monde");

BonsoirToutLeMonde(); 


function nombrePair(nombre) {
  return nombre % 2 === 0;
}

console.log(nombrePair(3));


const nombrePair2 = (nombre) => nombre % 2 === 0;


function multiplication(a,b){  
     const result=a*b;  
     return result; 
    }	

console.log("La multiplication des deux nombres est : "+multiplication(2, 3));


const multiplication2 = (a, b) => {
    const result = a * b;
    return result;
};

console.log("La multiplication des deux nombres est : "+multiplication2(2, 3));