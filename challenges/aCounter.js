function counterA() {
  const text = document.getElementById("aCounter").value;
  const resultDiv = document.getElementById("aCounterResult");
  const aLetter = "a";
  let counter = 0;

  if (!text) {
    resultDiv.innerHTML = "Por favor, insira um texto!";
    return;
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() == aLetter) {
      counter++;
    }
  }

  resultDiv.innerHTML =
    counter == 0
      ? `A letra 'a' não se repete`
      : counter == 1
      ? `A letra 'a' se repete ${counter} vez`
      : `A letra 'a' se repete ${counter} vezes`;
}
