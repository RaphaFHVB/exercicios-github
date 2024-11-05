var mb = parseFloat(prompt("Informe o tamanho do arquivo em MB: "));
var mbps = parseFloat(prompt("Informe a velocidade do link de internet em MBPS: "));
var velpseg = (mb / (mbps/8));
var velpmin = velpseg / 60;

alert("Um arquivo com " + mb + " MB" + "\nBaixado em " + mbps + " Mbps" + "\nSerá baixado em " + velpseg + " MB por segundo ou " + velpmin + " MB por minuto.");
console.alert("Um arquivo com " + mb + " MB" + "\nBaixado em " + mbps + " Mbps" + "\n Será baixado em " + velpseg + " MB por segundo ou " + velpmin + " MB por minuto.");