let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

function exibirAlerta() {
    alert('Eu amo JS!');
}

function exibirMensagem() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaDosNumeros () {
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite outro número:'));
    let soma = num1 + num2;
    alert(`O resultado da soma entre os números ${num1} e ${num2} é igual á ${soma}.`);
}