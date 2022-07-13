const listatintas = document.querySelectorAll('li');
const botaoMostra = document.querySelector("[data-mostra]");
const botaoEsconde = document.querySelector("[data-esconde]");

botaoMostra.addEventListener("click", () => {listatintas.forEach((elemento) => {
  elemento.style.display = 'block'
})
})
botaoEsconde.addEventListener("click", () => {listatintas.forEach((elemento) => {
  elemento.style.display = 'none'
})
})



