// 1. Créer deux variables prenom et nom
let prenom = "Charlotte"
let nom = "Dupont"

/*2. Imprimer dans la console la valeur du prénom et du nom : “Le prénom est [valeur] et le nom est [valeur]”*/
console.log(`Le prénom est ${prenom} et le nom est ${nom}`);

/*3. Coder un petit programme qui permet d’imprimer dans la console la variable qui comporte le plus de lettres et donner le nombre de lettres. En fonction de la longueur, imprimer soit :
“Le prénom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le nom [valeur] a le plus de lettres et en comporte [nombre de lettres]”
”Le prénom et le nom ont le même nombre de lettres et en comportent [nombre de lettres]”*/
if(prenom.length > nom.length) {
  console.log(`Le prénom ${prenom} a le plus de lettres et en comporte ${prenom.length}`)
} else if(nom.length > prenom.length) {
console.log(`Le nom ${nom} a le plus de lettres et en comporte ${nom.length}`)
} else {
  console.log(`Le prénom et le nom ont le même nombre de lettres et en comportent ${nom.length}`)
}

// 4. Passer la dernière lettre du prénom en lettre capitale
let prenomSansDerniereLettre = prenom.slice(0, -1);
let derniereLettreCapitale = prenom.slice(-1).toUpperCase();
prenom = prenomSansDerniereLettre + derniereLettreCapitale
console.log(prenom)

//5. Remplacer la première lettre du prénom par la première lettre du nom
prenom = nom.slice(0,1) + prenom.substr(1);
console.log(prenom);

//6. Inverser les lettres du deuxième prénom (par exemple Henri devient irneH)
//nom = nom.split("").reverse().join("");
let reversedNom = '';
for(var i = nom.length-1; i>= 0; i--) {
  reversedNom = reversedNom + nom[i];
}
nom = reversedNom
console.log(nom)

//7. Supprimer toutes les voyelles dans la phrase suivante “Alegria Academy Rocks”
let phrase = "Alegria Academy Rocks";
let nouvellePhrase = "";

let voyelles = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };
  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase[i].toLowerCase();
    if (!voyelles[letter]) {
      nouvellePhrase += phrase[i];
    }
  };
  console.log(nouvellePhrase);
