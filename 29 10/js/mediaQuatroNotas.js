//As variaveis de nota, servem para pegar a nota que o usuario informar
var nota1 = parseFloat(prompt("Informe a primeira nota: "));
var nota2 = parseFloat(prompt("Informe a segunda nota: "));
var nota3 = parseFloat(prompt("Informe a terceira nota: "));
var nota4 = parseFloat(prompt("Informe a quarta nota: "));
//Esta variavel vai pegar as notas e calcular a média
var media = (nota1 + nota2 + nota3 + nota4) / 4;

//Estas 2 linhas de codigo servem para passar a mensagem ao usuario, sendo alertando e mostrando no console
alert("Sua média é: " + media);
console.log("Sua média é: " + media);

//Estas linhas servem para avisar se o usuario passou ou reprovou baseado na media
if(media >= 6){
    alert("Você passou!");
    console.log("Você passou!");
}

else{
    alert("Você reprovou!");
    console.log("Você reprovou!");
}