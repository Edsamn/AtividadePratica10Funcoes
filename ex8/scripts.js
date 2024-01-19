// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

let num = Number(prompt("Digite um numero"));

function mostrarDobro(num) {
  let dobro = num * 2;
  alert(`O dobro do número ${num} é ${dobro}`);
}

mostrarDobro(num);
