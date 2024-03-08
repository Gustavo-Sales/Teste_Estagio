// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
// próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
// se o número informado pertence ou não a sequência.

function fibonacci(num) {
    const sequenciaFibonacci = [];

    let a = 0;
    let b = 1; 

    while (b <= num) {
        sequenciaFibonacci.push(b)
        let next = a + b
        a = b
        b = next
    };

    return sequenciaFibonacci;
};


let numero = 55;

const isFibonacci = fibonacci(numero).includes(numero);

if (isFibonacci) {
    console.log(`O número ${numero} pertence à sequência de fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de fibonacci.`);
};