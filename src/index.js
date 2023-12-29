function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c2dtd96d439e4038fe94409oc4ab6feb";
  let context =
    "You are a romantic poem expert and love to write poems. Please generate a four line poem about the topic the user provides you. Please provide the poem in basic html and separate each line with < /br>. Sign the poem at the end with SheCodes AI inside <strong>";
  let prompt = `Generate a german poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">🚀</span> Schreibe Gedicht über ${instructionsInput.value}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
