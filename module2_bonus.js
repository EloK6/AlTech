// Variables initiales. Les points de l'ordinateur et de l'utilisateur sont à 0.
let pointsOrdi=0;
let pointsUtilisateur=0;

//Créer une fonction game qui prend deux paramètres (choix1 er choix2) et qui compare toutes les possibilités. Par exemple si choix1 ==="ciseaux" && choix2==="pierre", alors on retourne pierre. Coder toutes les possibilités.
function game(choix1, choix2) {
  if (choix1 === choix2) {
    return 'Egalité !';
  } else if (choix1 === 'pierre') {
    if (choix2 === 'ciseaux') {
      return 'pierre';
    } else if (choix2 === 'feuille') {
      return 'feuille';
    }
  } else if (choix1 === 'feuille') {
    if (choix2 === 'pierre') {
      return 'feuille';
    } else if (choix2 === 'ciseaux') {
      return 'ciseaux';
    }
  } else if (choix1 === 'ciseaux') {
    if (choix2 === 'pierre') {
      return 'pierre';
    } else if (choix2 === 'feuille') {
      return 'ciseaux';
    }
  }
}

// Boucler tant les points de l'ordinateur et les points de l'utilisateur sont inférieurs à 3
while(pointsOrdi <3 && pointsUtilisateur <3) {
  //Demander à l'utilisateur de choisir entre ciseaux, pierre, feuille et l'assigner dans une variable.
  let choixUtilisateur = prompt("Choisissez entre pierre, feuille et ciseaux")

  //Choix de l'ordinateur
  let tableau = ["pierre", "feuille", "ciseaux"]
  let choixOrdi = tableau[Math.floor(Math.random()*tableau.length)]
  console.log("Le choix de l'ordinateur : ",choixOrdi)

  //Appel de la fonction et assignation dans une variable resultat
  var resultat = game(choixUtilisateur, choixOrdi);

  //Vérification du résultat selon 3 possibilité : égalité, le résultat est égal à choixUtilisateur ou le résultat est égal à choixOrdi 
  if (resultat === 'Egalité !') {
    console.log('=> Egalité !');
  } else if (resultat === choixUtilisateur) {
    pointsUtilisateur++;
    console.log(`Gagné, utilisateur : ${pointsUtilisateur}, ordinateur : ${pointsOrdi}`);
  } else {
    pointsOrdi++;
    console.log(`Perdu, utilisateur : ${pointsUtilisateur}, ordinateur : ${pointsOrdi}`);
  }
}

// Préciser si l'utilisateur a gagné ou perdu (l'ordi ou l'utilisateur a atteint 3 en premier)
if(pointsOrdi === 3) {
  console.log("L'ordinateur a gagné");
} 
if(pointsUtilisateur === 3) {
  console.log("Vous avez gagné");
}
