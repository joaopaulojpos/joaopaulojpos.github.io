function regrando(){
let valor_compra = document.getElementById("val_compra").innerHTML
let valor_entrada = 100

let taxas = [4.6, 6.1, 7.6, 9.1, 10.6, 12.1, 13.6, 15.1, 16.6, 18.1, 19.6, 21.1]
let valor_final = []

let valor = valor_compra - valor_entrada

var i = 0;
while (taxas[i]) {
  //text += taxas[i]
  
  let = percentual = (taxas[i] * valor) / 100
  valor_final.push(valor + percentual)
  console.log(valor_final[i])
  i++;
}
//document.getElementById("demo").innerHTML = valor_final
document.getElementById("demo").innerHTML = valor_final
}

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

//document.write(taxas[0])