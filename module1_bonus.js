// Choix de l'ordinateur
let motsPossible = ["javascript", "allegria", "academy", "boucle", "conditions"]
let motSecret = motsPossible[Math.floor(Math.random()*motsPossible.length)];
//console.log(motSecret);

/* 
1. Créer une variable ligne et assigner à cette variable autant de "-" qu'il existe de lettre dans MotSecret, imprimer la variable ligne
*/
let ligne=""
for(var i=0;i<motSecret.length;i++) {
  ligne+="-"
}
console.log(ligne)

/* 
2. Demander à l'utilisateur de choisir une lettre et l'assigner à une variable choixUtilisateur et réimprimer ligne
*/
let choixUtilisation = prompt("Choisissez une lettre")
console.log(ligne)

/* 
3. Créer une variable avancement qui est égale à la longueur du mot secret
*/
let avancement = motSecret.length;

/* 
4.Coder un petit programme qui réalise l'action suivante:
- tant que avancement est supérieur à 0
- demander à l'utilisateur de choisir une lettre et assigner la valeur dans une variable
- vérifier si la lettre choisie est dans le motSecret, et si c'est le cas, remplacer les "-" de ligne par la lettre chosie.
- diminuer la valeur avancement de 1
- imprimer dans la console la ligne
*/
while(avancement >0){
  var reponse = prompt("Choisissez une lettre");
  for(var i=0; i < motSecret.length;i++) {
    if(motSecret[i]=== reponse) {
      ligne = ligne.substring(0,i) + reponse + ligne.substring(i+1);
      avancement--;
    }
  } 
  console.log(ligne);
}

/* 
5. Féliciter le joueur si l'avancement est égal à 0
*/
if(avancement===0) {
  console.log("BRAVO")
}

