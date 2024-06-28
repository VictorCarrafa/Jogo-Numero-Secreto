let listaDeNumerosSorteados = []; //Lista vazia criada
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// ------------------------------------------------------------------------------------------------------
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// A forma abaixo tem o mesmo intuito do codigo acima, porém utilizando função para que o código não se repita.

function exibirTextoNaTela(tag, texto) { // FUNÇÃO COM PARAMETRO E SEM RETORNO
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// exibirTextoNaTela('.Teste', 'aaaaaaaaaaaaaaaaa');
}
exibirMensagemInicial();

// ------------------------------------------------------------------------------------------------------

// let teste = document.querySelector('#Teste');
// teste.innerHTML = 'blabla blabla';

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

function verificarChute() {  // FUNÇÃO SEM PARAMETRO E SEM RETORNO
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //selecionando id e removendo atributo disabled quando acertar o chute, dessa forma fazendo com que o botão novo jogo seja habilitado.
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        // tentativas = tentativas + 1; fas a mesma coisa essa linha e a de baixo.
        tentativas++;
        limparCampo();
    }
}

function verificaConsole() {
    console.log('O botão foi clicado');
}

function verificaAlerta() {
    alert('Eu amo JS');
}

function verifcaPrompt() {
    var cidade = prompt('Qual o nome da cidade que mora no Brasil?');
    alert('Estive em '+ cidade +' e lembrei de você');
}

function somaNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

// -----------------------------------------------------------------------------------------------
// Abaixo função de N° aleatório: estudar math.random

function gerarNumeroAleatorio() { 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() { // FUNÇÃO SEM PARAMETRO E SEM RETORNO
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// o document.getElementById('') vai pro mundo HTML buscando um id específico. 
// .setAttribute('disabled', true): Essa parte está definindo um atributo do elemento selecionado. Especificamente, está adicionando o atributo disabled e definindo seu valor como true.



