alert("Vamos calcular a media?");
let qtdNum = parseInt(prompt("Que quantos números você gostaria de calcular?"));
let soma = 0;

for (let i = 1; i <= qtdNum; i++) {
  let num = parseInt(prompt(`${i}º número:`));
  soma += num;
}

let media = soma / qtdNum;
alert(`${media} é a média dos ${qtdNum} números.`);
