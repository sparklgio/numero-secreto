//Criar uma função que exibe "Olá, mundo!" no console.
function mensagemDeBoasVindas() {
    console.log('Olá, mundo!');
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
mensagemDeBoasVindas();

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome('Giovana');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDoNumero(numero) {
    return numero * 2
}

let resultadoDobro = dobroDoNumero(5);
console.log(resultadoDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function receberNumeros(num1, num2, num3) {
    return (num1+num2+num3)/3;
}

let media = receberNumeros(5, 2, 3);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let maiorNumero = encontrarMaior(13, 8);
console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function receberNumero(numero) {
    return numero*numero;
}

let resultado = receberNumero(5);
console.log(resultado);