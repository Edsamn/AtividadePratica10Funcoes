// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).
let n1 = Number(prompt('Digite a nota 1'))
let n2 = Number(prompt('Digite a nota 2'))
let n3 = Number(prompt('Digite a nota 3'))
let tipoMedia = prompt('Digite A para média aritmética e P para média ponderada')

function mediasAluno (n1, n2, n3, tipoMedia) {
    if (tipoMedia === 'A') {
        let A = (n1 + n2 + n3) / 3
        console.log(A)
    } else {
        let P = (n1 * 5 + n2 * 3 + n3 * 2) / (10)
        console.log(P)
    }
}

mediasAluno(n1,n2,n3, tipoMedia)