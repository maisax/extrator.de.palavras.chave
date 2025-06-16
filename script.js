const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
      const texto = document.querySelector('#entrada-de-texto').value;
       const campoResultado = document.querySelector('#resultado-palavrachave');
     const palavrasChave = processaTexto(texto);
      campoResultado.textContent = palavrasChave.join(", ");
 }

function processa Texto (texto) {
    let palavras = texto.split(/\P{L}+/u);
     contaFrequencias(palavras)
    let frequencias = [];
    for(let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias [i]++;
            }
            
        return frequencias
    return palavras;
    }
