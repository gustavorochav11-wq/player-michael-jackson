let cliques = 0;
const botao = document.querySelector('#btn-play');
const somMj = document.querySelector('#musica');
function musicaTocando() {
    botao.innerText = "TOCANDO";
    botao.setAttribute('style','background-color: #d4af37;color: #000;');
    somMj.play();
}

// logo dps tem a função envolvente q manda em td nesse programa
function iniciarPlayer() {
    botao.innerText = "CARREGANDO";
    
    // aq ele desativa por um tempinho pro usuario nao clicar 2x
    botao.setAttribute('disabled', 'true'); // é assim q eu aproveito o finde rs

    // aqui seria o tempo simulado do carregamento do beat 
    cliques++; // o contador dos cliques
    console.log(`Cliques: ${cliques}`)
    setTimeout(() => {
        // Quando der os 1.5 segundos, a gente ativa dnv o botão e o callback começa a rodar
        botao.removeAttribute('disabled');
        musicaTocando();
    }, 1500);
}

// Obs: tudo isso só rola assim q o usuario clicar no botao (obv)
botao.addEventListener('click', iniciarPlayer);