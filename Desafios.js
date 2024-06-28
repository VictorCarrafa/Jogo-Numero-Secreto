// Criar uma função que exibe "Olá, mundo!" no console.

function hello() {
    console.log("Olá, Mundo!");
}
hello();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function consoleNome(nome) {
   console.log("Olá, " + nome + "!");
}
consoleNome("Victor");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(numero) {
    return numero * 2;
}
let resultadoDobro = dobroNumero(8);
console.log(resultadoDobro);


// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let resultadoMedia = mediaNumeros(8, 10, 12);
console.log(resultadoMedia);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrandoMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let maiorNumero = encontrandoMaior(22,84);
console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicaNum(numero) {
    return numero * numero;
}
let numeroMultiplicado = multiplicaNum(9);
console.log(numeroMultiplicado);

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imcCalc() {
    let altura = parseFloat(prompt("Informe sua Altura:"));
    let peso = parseFloat(prompt("Informe seu Peso:"));
    let calc = peso/(altura * altura); 
    alert('O resultado do seu Cálculo IMC é: '+ calc +'.');
}
// imcCalc(); 

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  let numero = 8;
  let resultado = calcularFatorial(numero);
//   alert(`O fatorial de ${numero} é ${resultado}`);
//   calcularFatorial(numero);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80

function converteDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 10000;
let valorEmReais = converteDolarParaReal(valorEmDolar);
console.log(`$${valorEmDolar} dólares equivalem a R$${valorEmReais}.`);


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function espacoSala (alturaEsp, larguraEsp) {
    let areaSala = larguraEsp * alturaEsp;
    let perimetroSala = (larguraEsp * 2) + (alturaEsp * 2);

    console.log("Area da sala: " + areaSala + " metros quadrados.");
    console.log("Perimetro é de " + perimetroSala + " metros.");
}
let alturaEsp = 5;
let larguraEsp = 10;
espacoSala (alturaEsp, larguraEsp);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function salaCircular(raioSala) {
    let areaSalaCircular = Math.PI * (Math.pow(raioSala, raioSala));
    let perimetroSalaCircular = 2 * Math.PI * raioSala;

    console.log("Area da sala circular é de: " + areaSalaCircular.toFixed(2) + " metros quadrados.");
    console.log("O perimetro da sala circular é de " + perimetroSalaCircular.toFixed(2) + " metros.");
}
let raioSala = 5;
salaCircular(raioSala);


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
function mostrarTabuada(numeroTabuada) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numeroTabuada * i;
      console.log(`${numeroTabuada} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numeroTabuada = 10;
  mostrarTabuada(numeroTabuada);

  
  
// Crie uma lista vazia, com o nome listaGenerica
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let aFazeresVictor = ['Marcar Para tirar RG', 'Inserir Horas Complementares Facul', 'Fazer Rematricula Facul, mas antes inserir materia opcional'];
console.log(aFazeresVictor[0]);
//Exiba o segundo elemento.
console.log(aFazeresVictor[1]);
//Exiba apenas o último elemento.
console.log(aFazeresVictor[2]);




