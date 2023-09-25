var nome = prompt("Olá, qual seu nome?")

var numero = parseFloat(prompt("Bem-vinda " + nome + " ,por favor digite um número inteiro:"));

if (numero < 1 || numero > 99 || numero%2 != 0){
    alert("O valor digitado NÃO ATENDE aos critérios! ('Nº par', 'Nº postivo > 0' e 'nº < que 100')");
} else{
    alert("O valor digitado ATENDE aos critérios! ('Nº par', 'Nº postivo > 0' e 'nº < que 100')");
}

