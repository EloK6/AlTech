let classe_2022 = [ 
  {
     nom: 'Sandra',
     age: 35,
     profession: "aucune",
     adresse : "Paris"
  },
  {
      nom: 'Nicolas',
      age: 18,
      profession: "web master",
      adresse : "Paris"
  },
  {
       nom: 'Julien',
       age: 42,
       profession: "designer",
       adresse : "Bordeaux"
  },
  {
       nom: 'Claudia',
       age: 28,
       profession: "responsable de communication",
       adresse : "Nantes"
  },
];

// 1. Coder une fonction qui retourne la somme des étudiants composant cette classe
function sommeStudent(array) {
 let result = array.length;
 return result;
}

let nombreEtudiants = sommeStudent(classe_2022);
console.log(nombreEtudiants)

/* 2. Coder une fonction qui retourne toutes les professions dans un tableau
output attendu [ 'aucune', 'web master', 'designer', 'responsable de communication' ]
*/
function professions(array) {
 let prof = [];
 for(var i=0; i< array.length;i++) {
   prof.push(array[i].profession)
 }
 return prof
}

let tabProfessions = professions(classe_2022);
console.log(tabProfessions)

// 3. Coder une fonction qui retourne le nom de la personne la plus âgée
function etudiantPlusAge(array) {
 let plusAge = array[0].age;
 let nomplusAge = "";
 for(var i=0; i< array.length;i++) {
   if(plusAge < array[i].age) {
     plusAge = array[i].age;
     nomPlusAge = array[i].nom
   }
 }
 return nomPlusAge
}

let etudiant_plus_age = etudiantPlusAge(classe_2022);
console.log(etudiant_plus_age)

// 4. Coder une fonction qui permet de calculer l’âge moyen (arrondi à l'unité) ?
function ageMoyen(array) {
 var result = 0;
 for(var i=0; i<array.length;i++){
   result +=Number(array[i].age)
 }
return (result/array.length).toFixed();
}

let moyenneAge = ageMoyen(classe_2022);
console.log(moyenneAge)

// 5. Quels sont les noms des étudiants vivant à Paris (retourner un tableau d'objects avec nom et adresse pour chacun des étudiants concernés) ?
function vivantAParis(array) {
 let aParis=[];
for(var i=0; i<array.length;i++){
   if(array[i].adresse==="Paris") {
     aParis.push({nom : array[i].nom, adresse : array[i].adresse}) ;
   }
 }
 return aParis;
}

let viventAParis = vivantAParis(classe_2022);
console.log(viventAParis)
