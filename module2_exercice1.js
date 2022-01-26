// 1. Créer un tableau age comprenant 5 éléments de type nombres entiers positifs
let age = [12,45,86,52,28]

// 2. Ecrire une fonction qui permet de calculer la somme totale des âges
function somme(array) {
  var sum = 0;
  for (var x = 0; x < array.length; x++) {
    sum += array[x];
  }

  return sum;
}

var total = somme(age);
console.log(total);

// 3. Ecrire une fonction qui permet de calculer la moyenne des âges
function moyenne(array) {
return somme(array)/array.length;
}

var average = moyenne(age);
console.log(average)


// 4. Créer un tableau prenom comprenant 5 éléments différents de type String
let prenom = ["Nicolas", "Karine", "Sarah", "Guillaume", "Raphaëlle"];

// 5. Ecrire une fonction pour définir l'élément le plus petit du tableau 'prenom' (celui comportant le moins de lettres)
function trouverElementPlusPetit(mots) {
  let motPlusPetit = mots[0]
  for(var i=0; i< mots.length; i++) {
    let mot = mots[i];
    if(motPlusPetit.length > mot.length){
      motPlusPetit = mot
    }
  }
  return motPlusPetit
}

let petitPrenom = trouverElementPlusPetit(prenom);
console.log(petitPrenom)


// 6. Fusionner les deux tableaux 'age' et 'prenom' en un nouveau tableau nommé 'students'
let students = age.concat(prenom);
console.log(students)

// 7. Ecrire une fonction qui permet de sommer les nombres et les longueurs de chaque élément de type String dans le tableau 'students'
function sommeElements(array) {
  let somme = 0;
  for(var i=0; i<array.length; i++) {
    let element = array[i]
    if(typeof(element)==='string') {
      somme+=element.length;
    }
    if(typeof(element)==='number') {
      somme+=element
    }
  }
  return somme;
}

let sommeTotaleArray = sommeElements(students);
console.log(sommeTotaleArray)
