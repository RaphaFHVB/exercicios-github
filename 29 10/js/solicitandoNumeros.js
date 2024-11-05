//As variaveis servem para pegar alguns numeros e calcular de acordo com algumas solicitacoes
var number1 = parseInt(prompt("Informe um número inteiro: "));
var number2 = parseInt(prompt("Informe outro número inteiro: "));
var number3 = parseFloat(prompt("Informe um número Real: "));
var exa = (number1 * 2) + (number2 / 2);
var exb = (number1 * 3) + number3;
var exc = (number3 * number3 * number3);

//A mensagem de alerta e do console que mostra o resultado
alert("A) Dobro de " + number1 + " metade de " + number2 + ": " + exa + "\nB) Soma do triplo de " + number1 + " com o " + number3 + ": " + exb + "\nC) " + number3 + " elevado ao cubo: " + exc);
console.log("A) Dobro de " + number1 + " metade de " + number2 + ": " + exa + "\nB) Soma do triplo de " + number1 + " com o " + number3 + ": " + exb + "\nC) " + number3 + " elevado ao cubo: " + exc);