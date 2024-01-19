// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.
// Ex:
// Entrada: 3672
// Saída: 1:1:12

let tempoEmSegundos = Number(prompt("Digite um valor de tempo"));

function tempo(tempoEmSegundos) {
  let tempoEmMinutos = parseInt((tempoEmSegundos % 3600) / 60);
  let tempoEmHoras = parseInt(tempoEmSegundos / 3600);
  let segundos = tempoEmSegundos % 60;
  console.log(tempoEmHoras, ":", tempoEmMinutos, ":", segundos);
}

tempo(tempoEmSegundos);
