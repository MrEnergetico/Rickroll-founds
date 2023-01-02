function cambiaColore() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      var textarea = document.getElementById("textarea");

      if (data.blacklist.includes(textarea.value)) {
        textarea.style.backgroundColor = "red";
      } else {
        textarea.style.backgroundColor = "green";
      }
    });
}

textarea.addEventListener("input", cambiaColore);
window.addEventListener("load", cambiaColore);

function isLink(text) {
  const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return linkRegex.test(text);
}

function Link() {
  var textareas = document.getElementById("textareas");
  if (isLink(textareas.value)) {
    console.log(textareas.value);
  }
}

textarea.addEventListener("input", Link);