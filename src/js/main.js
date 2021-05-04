// # Variables temporaires REUSSI
    // let a = 1; -> 2
    //  let b = 2; -> 3
    // let c = 3; -> 1
//     - ## Afficher le changement des variables

// let a = 1; 
// let b = 2; 
// let c = 3;

// console.log(a,b,c);

// temp = a;  // 1

// a = b; // 2 
// b = c; // 3
// c = temp; // 1


// console.log(a,b,c);


// - # Exo 1 CORRIGE
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

//  let a = 1; 
//  let b = 2; 
//  let c = 3; 
//  let d = 4; 
//  let temps;

//  console.log(a,b,c,d,);

//  temp = a; // temp vaut 1
//  a = d; // a vaut d (4)  
//  d = temp; // d vaut temp (1)
//  temp = b; // temp vaut b (2)
//  b = c; // b vaut c (3) 
//  c = temp; // c vaut temp (2) 
 

 

//  console.log(a,b,c,d);



//     - ## Afficher le changement des variables



// - #  Exo 2 REUSSI
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1


// let a = 1; 
// let b = 2; 
// let c = 3; 
// let d = 4; 

// console.log(a,b,c,d,);

// temp = a; // 1

// a = b; // 2
// b = c; //3
// c = d; // 4
// d = temp; //1

// //     - ## Afficher le changement des variables


// console.log(a,b,c,d,);


// - # Exo 3 
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire

let tableau = [1, 2, 3, 4, "temp"];

console.log(tableau);


// Voir correction en screen 

tab[4] = tab[0]; // indice 4 vaut 1
tab[0] = tab[3];
tab[3] = tab[4];
tab[4] = tab[1];
tab[1] = tab[2];
tab[2] = tab[4];

console.log(tab[0], tab[1], tab[2], tab[3]);



// - # Exo 4  REUSSI


let a = 1  // -> 4
let b = 2 // -> 5
let c = 3 // -> 1
let d = 4 // -> 2
let e = 5 // -> 6
let f = 6 // -> 3

temp = a; //1

a = d; // 4 
d = b; // 2
b = e; // 5
e = f; // 6 
f = c; // 3
c = temp; //1



//     - ## Afficher le changement des variables

console.log(a,b,c,d,e,f);
