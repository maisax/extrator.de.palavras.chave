const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
function mostraPalavrasChave() {
      const texto = document.querySelector('#entrada-de-texto').value;
       const campoResultado = document.querySelector('#resultado-palavrachave');
     const palavrasChave = texto.split(" ");
      campoResultado.textContent = palavrasChave.join(", ");
 }

// código omitido

function processaTexto(texto){

}
