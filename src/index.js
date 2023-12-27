function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Hier ist das Gedicht",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
