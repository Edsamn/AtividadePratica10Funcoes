// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.
let valor = Number(prompt("Digite um valor positivo inteiro"));
let primo = 0;
function primoOuNao(valor) {
  for (i = 0; i <= valor; i++) {
    if (valor % i === 0) {
      primo++;
    }
  }

  if (primo === 2) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }
}

primoOuNao(valor);
