//As variaveis pegam e armazenam as informações para os calculos
var peso = parseFloat(prompt("Informe o peso em quilos dos peixes que trouxe: "));
var multa = 50.00;
var valor

//Abaixo informa o usuario se ele ira ou nao pagar, mostrando o resultando na tela e no console
if(peso > multa){
    valor = (peso - multa) * 4.00;
    alert("O peso que trouxe excede o regulamento de pesca de 50 quilos, deverá pagar uma multa de R$ " + valor);
    console.log("O peso que trouxe excede o regulamento de pesca de 50 quilos, deverá pagar uma multa de R$ " + valor);
}
else if(peso <= multa){
    alert("O peso não excedeu o regulamento, não precisará pagar nenhuma multa.");
    console.log("O peso não excedeu o regulamento, não precisará pagar nenhuma multa.");
}
else{
    alert("O valor informado não era válido, informe um peso válido.");
    console.log("O valor informado não era válido, informe um peso válido.");
}