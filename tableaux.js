// const myArray=['Banane','Pomme','Cerise','Poire',4]

// console.log(myArray,"Mon Tableau"); 
// console.log(myArray.length,"La longueur de mon tableau myArray"); 
// console.log(myArray.toString(),"Conversation de mon tableau en chaine de caractère"); 
// console.log(myArray.join("/")); 




// const cars=new Array('BMW','Citroen','Renault')

// console.log(cars,"Mes Voiture");

// let voiture=cars.pop(); 
// console.log(voiture,"La voiture retirée");

// let fruit= myArray.push('kiwi');
// console.log(fruit,"ajouter un element Fruits");
// console.log(myArray,"Tableau Fruits");
// console.log(myArray[1]);
// myArray[0]='Papaye';
// console.log(myArray); 

// const boys=["Jean","Paul","Jacques"];
// const girls=["Marie","Anne","Sophie"];


// const myChildren= boys.concat(girls); 
// console.log(myChildren,"My Children");

// Splice 

const fruits=['Banane','Pomme','Cerise','Poire'];

fruits.splice(2,0,'Citron','Kiwi');

console.log(fruits,"Fruits");

const fr=fruits.splice(3,2);

console.log(fr); 

console.log(fruits); 

// slice


// const fruits2=['Banane','Orange','Citron','Pomme','Mangue']; 

// const SliceFruit=fruits2.slice(2);

// console.log(SliceFruit);



// const fruits3=['Banane','Orange','Citron','Pomme','Mangue']; 

// const Slicefruit3=fruits3.slice(1,3);

// console.log(Slicefruit3); 


// exercice : afficher de 1 à 6     |    

const nombres=[1,2,3,4,5,6,7];

// const sousTableauNombres = nombres.slice(0, 6);

// console.log(sousTableauNombres);


// Enlever l'element 3 et 4 

const X = nombres.splice(2, 2);

console.log(X);


