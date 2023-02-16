console.log("-----------------")
console.log("Bem-vindo!");
let nomeDoProduto = "Celular";
let precoDoProduto = 2000;
let descontoDoProduto = 10;
let descontoValido = true;

let precoFinal;
if (descontoValido) {
    precoFinal = precoDoProduto * (1 - descontoDoProduto / 100);
} else {
    precoFinal = precoDoProduto;
}
console.log("-----------------")
if (precoFinal > 1000) {
    precoFinal -= 50;
    console.log(`O preço final do produto ${nomeDoProduto} é R$ ${precoFinal} (com desconto de R$50).`);
} else {
    console.log(`O preço final do produto ${nomeDoProduto} é R$ ${precoFinal}`);
}
console.log("-----------------")
let demandas = [10, 2, 1, 30, 5];
let totais = [];

for (let i = 0; i < demandas.length; i++) {
    let demanda = demandas[i];
    let precoUnitario = 2000;
    let total = demanda * precoUnitario;
    totais.push(total);
    console.log(`O cliente ${(i + 1)} deverá pagar: R$ ${total}`);
}

let lucroTotal = totais.reduce((acc, cur) => acc + cur, 0);
console.log("-----------------")
console.log(`O total de lucro é de R$ ${lucroTotal}`);
console.log("-----------------")
