//Armazena os dados que o usuario informa para fazer o calculo
var metros = parseFloat(prompt("Informe quantos metros serão pintados: "));
var litros = metros / 3;
var latas = litros / 18;
var galao = litros / 3.6;
var precoLata;
var precoGalao;
var precoMix;
var misturaLata;
var misturaGalao;

//Verifica se as latas sao um numero inteiro ou real, caso seja um numero inteiro ira adicionar uma lata a mais ja que nao se compra lata pela metade
if(!Number.isInteger(latas)){
    latas = parseInt(latas) + 1;
//Serve para verificar se precisará de mais 1 galao ou nao com base em resto de divisao
    if(galao % 3.6 != 0){
        galao = parseInt(galao) + 1;
        misturaLata = parseInt(litros / 18);
        misturaGalao = parseInt(litros - (misturaLata * 18)) / 3.6;
//Serve para calcular se precisara de mais um na mistura caso precise para completar
        if(litros - (misturaLata * 18) % 3.6 != 0){
            misturaGalao = parseInt(misturaGalao) + 1;
            precoLata = latas * 80.00;
            precoGalao = galao * 25.00;
            precoMix = (misturaLata * 80.00) + (misturaGalao * 25.00);
    alert("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
    console.log("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
        }
        else{
            precoLata = latas * 80.00;
            precoGalao = galao * 25.00;
            precoMix = (misturaLata * 80.00) + (misturaGalao * 25.00);
    alert("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
    console.log("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
        }
    }
}

else{
    precoLata = latas * 80.00;
    precoGalao = galao * 25.00;
    precoMix = (misturaLata * 80.00) + (misturaGalao * 25.00);
alert("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
console.log("Para pintar " + metros + " m², precisará de: \nLatas: " + latas + "\nR$ "+ precoLata + "\nGalão: " + galao + "\n R$ " + precoGalao + "\nCaso queira comprar galões e latas:" + "\nLatas: " + misturaLata + "\nGalão: " + misturaGalao + "\nR$ " + precoMix);
}