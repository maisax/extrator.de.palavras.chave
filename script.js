const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
function mostraPalavrasChave() {
      const texto = document.querySelector('#entrada-de-texto').value;
       const campoResultado = document.querySelector('#resultado-palavrachave');
     const palavrasChave = texto.split(" ");
      campoResultado.textContent = palavrasChave.join(", ");
 }

function processaTexto(texto){
    let palavras = texto.split(/[a-zA-Z]+/);
    return palavras;
}
