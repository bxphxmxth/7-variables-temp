// // // # Les conditions - introduction
// // //     1. ### Via un console.log() vérifie l'egalité entre 1 et "1"

// let prem = 1;
// let sec = "1";

// console.log(prem == sec);


// // //     2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

// console.log(prem === sec);

// // //     3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

// let prenom = prompt("Ton nom wesh");

// if(prenom.length < 5){
//     console.log("Trop couurt");
// }

// // //     4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let rep = prompt("2+2");

// if(rep == 4){
//     console.log("Uii bravo");
// }else{
//     console.log("nn t nul sorry");
// }


//     5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let rep = prompt("5*5=??????");
// let unites = Math.abs(rep - 25);

// if(rep == 25){
//     console.log("noicee");
// }else{
//     console.log(`Tu es à ${unites} unités de la bonne réponse :o`);
// }


//     6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

let tab = [];

let rep1 = prompt("Tu vx quoi afou?");
let rep2 = prompt("Encore?");
let rep3 = prompt("wesh t'abuses");

tab.push(rep1,rep2,rep3);

if(tab.length == 3){
    console.log(tab);
}




//     7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

// let tinyBac = [];
// let bigBac = [];

// let rep = prompt("cmb??");

// if( rep >= 12){
//     bigBac.push(rep);
// }else{
//     tinyBac.push(rep);
// }

// console.log(`${tinyBac} et ${bigBac}`);





//     8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

// let age = 20;
// if (age >= 18){
//     console.log("tu peux entrer, tu es majeur"); 
// }else{
//     console.log("t mineur bouge");
// }