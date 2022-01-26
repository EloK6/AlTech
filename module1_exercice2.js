/* 
1. Trouver l'aire d'un triangle dont les longueurs de trois de ses côtés sont 10, 5 et 8
*/
var side1 = 10; 
var side2 = 5; 
var side3 = 8; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));


/*
2. Imprimer une suite de nombre compris entre 1 et 20. A chaque multiple de 3, remplacer le nombre par “Multiple de 3”
*/
for (var x=1; x<=20; x++) {
  if (x%3 === 0) {
    console.log("Multiple de 3");
  } else {
    console.log(x);
  }
}


/*
3. Vous devez coder un petit jeu. 
- L’ordinateur doit tirer un chiffre aléatoire entre 1 et 100. 
- L’utilisateur doit deviner le chiffre tiré par l’ordinateur en moins de 6 tentatives.
- S’il trouve le bon chiffre, imprimer “Bravo, vous avez trouvé en [x] essais !”
- S’il ne trouve pas le bon chiffre, aider l’utilisateur en précisant si sa proposition est trop grande ou trop petite.
*/

var ordinateur = Math.floor(Math.random() * 100) + 1;

for (var i = 0; i <= 6; i++) {
  var essai = Number(
    prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire.")
  );
  if (essai === solution) {
    console.log(`Bravo, vous avez trouvé en ${i} essais !`);
    break;
  } else if (essai < solution) {
    console.log(essai + " est trop petit");
  } else {
    console.log(essai + " est trop grand");
  }
}
if (i > 6) {
  console.log(`Vous avez perdu ! Le nombre était : ${solution}`);
}
