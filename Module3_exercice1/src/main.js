var btn = document.querySelector("button");
var txt = document.querySelector("p");
var img = document.querySelector("img");

btn.onclick = () => {
  if (btn.textContent === "Démarrer la machine") {
    btn.textContent = "Arrêter la machine";
    txt.textContent = "La machine est en marche !";
    txt.style.color = "green";
    img.src = "./images/go.png";
  } else {
    btn.textContent = "Démarrer la machine";
    txt.textContent = "La machine est arrêtée.";
    txt.style.color = "red";
    img.src = "./images/stop.png";
  }
};
