const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
      const texto = document.querySelector('#entrada-de-texto').value;
       const campoResultado = document.querySelector('#resultado-palavrachave');
     const palavrasChave = processaTexto(texto);
      campoResultado.textContent = palavrasChave.join(", ");
 }

function processaTexto(texto) {
    let palavras = texto.match(/\b\p{L}+\b/gu) || [];
    for(let i in palavras){
       palavras[i] = palavras[i].toLowerCase();
    }

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    function ordenaPalavra(p1, p2) {
        return frequencias [p2] - frequencias [p1];
    }

    console.log(ordenadas);
     return ordenadas.slice(0, 10);
    }
    
 function contaFrequencias(palavras){
    let frequencias = {};
    for (let palavra of palavras){
        if (palavra) { // Evita strings vazias
            palavra = palavra.toLowerCase();
            frequencias[palavra] = (frequencias[palavra] || 0) + 1;
        }
    }
    return frequencias;
}

