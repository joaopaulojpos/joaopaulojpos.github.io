/** 
let valor_compra = document.getElementById("val_compra").innerHTML
let valor_entrada = 100

let taxas = [4.6, 6.1, 7.6, 9.1, 10.6, 12.1, 13.6, 15.1, 16.6, 18.1, 19.6, 21.1]
let valor_final = []

let valor = valor_compra - valor_entrada

var i = 0;
while (taxas[i]) {
  text += taxas[i]

  let = percentual = (taxas[i] * valor) / 100
  valor_final.push(valor + percentual)
  console.log(valor_final[i])
  i++;
}
//document.getElementById("demo").innerHTML = valor_final
document.getElementById("demo").innerHTML = valor_final
*/

function calculo(val1, val2) {
  valor_compra = val1;
  valor_entrada = val2;

  var taxas = [4.6, 6.1, 7.6, 9.1, 10.6, 12.1, 13.6, 15.1, 16.6, 18.1, 19.6, 21.1];
  var valor_final = [];

  let valor = valor_compra - valor_entrada;

  var i = 0;
  while (taxas[i]) {
    
    let = percentual = (taxas[i] * valor) / 100
    valor_final.push(valor + percentual);
    document.getElementById("demo").innerHTML = valor_final
    i++;
  }
}

var text = document.getElementById("val_compra");
var entrada = document.getElementById("val_entrada");
var demo = document.getElementById("demo");

text.addEventListener("keyup", function () {
  var val_compra = this.value;
  var val_entrada = document.getElementById("val_entrada").innerHTML
  calculo(val_compra, val_entrada);
})

entrada.addEventListener("keyup", function () {
  var val_compra = text.value
  val_entrada = this.value;
  calculo(val_compra, val_entrada);
})