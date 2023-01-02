function cambiaColore() {

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    var textarea = document.getElementById("textarea");

    if (textarea.value === data.valore) {
      textarea.style.backgroundColor = "red";
    } else {
      textarea.style.backgroundColor = "green";
    }
  });

}

// Chiamata della funzione cambiaColore ogni volta che l'evento input viene triggerato sulla text area
textarea.addEventListener("input", cambiaColore);

// Chiamata della funzione cambiaColore quando il documento viene caricato
window.addEventListener("load", cambiaColore);
