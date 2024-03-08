// 5) Escreva um programa que inverta os caracteres de um string.

function inverterString(str) {
    let stringInvertida = "";

    for (let letra = str.length -1; letra >= 0; letra--) {
        stringInvertida += str[letra];
    };

    return stringInvertida;
}

let palavra = "node";

console.log(`A palavra ${palavra} invertida: ${inverterString(palavra)}`)