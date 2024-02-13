// Exerciocios de Fundamentos
// Exercicio 1: " Olá Mundo"
// Criar script e imprima o texto na tela 

console.log(" Olá Mundo !")

// Exercicios 2: conversao de tipos
// Dados o valor de string "1,2,3,4,5", converta-o  em numero e exiba o tipo  da vareavel no console.

const valorString = "1234"
const valorNumber = Number(valorString)
console.log(typeof valorNumber)

// Exercicios 3: manipulacao de string
// Dados um string "JavaScript e incrivel" escreva um codigo quantos caracteres a string tem e quantas palavras tem na frase .

const minhaString = "JavaScript e incrivel"
const numeroDeCaracteres = minhaString.length
const numeroDepalavras = minhaString.split(" ").length

console.log(`numemero de caracteres e:  ${numeroDeCaracteres}`)
console.log(`O numero de palavras e: ${numeroDepalavras}`)

// Exercicios 4: Loops e Arrays
// crie  um array com cinco  nomes. Use um loop for para imprimir cada nome no console

const nomes = ["Jose" , "Maria" ,"Ana", "Paulo", "Pedro" ]

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// Exercicos 6: Funcoes , string , math
//Crie um funcao que aceita uma string representando um horario no formato de 24 horas (por exemplo , "14:30")
//A funcao deve retornar uma String representando um formato de 12 horas (por exemplo ,"2:30 PM")
// Use o Objeto Math para auxiliar nesta conversao  Certefique de que sua funcao lida corretamente  com horario na meia-noite e o meio-dia

function converterHorario(horario24) {
    // 14:20 => hora 14, minuto = 20 => split(":") => (0) = 
    //const hora = horario24.split(":")[0]
    //const minutos = horario24.split(":")[1]

    const [hora, minutos] = horario24.split(":");

    // 15/12 = 3 , 23 % 31 = 11 
    // falsy  12 % 12  = 0 = 12
    const hora12 = hora % 12 || 12;

    let periodo = "AM";

    if (hora > 12 ) {
        periodo = "PM";
    }
    console.log (`${hora12}:${minutos} ${periodo}`)
    }
    converterHorario("15:31")
    converterHorario("05:31")
    converterHorario("22:31")
    converterHorario("16:59")








