// Avancando no JavaScript
//Manipulacao de arrays
const frutas = ["Maca" , "Laranja"]

frutas.unshift("Acerola")

console.log(frutas)

frutas.shift()

console.log(frutas)

// map, filter , reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6]

// find => retorna o primeiro elemento do criterio
const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar)

// Filter => retorna todos elemento do criterio
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

// Manipulacao de string

const frase = " Ola Mundo!"

const palavras = frase.trim().split(" ")

console.log(frase)
console.log(palavras)

const frase2 = "JavaScrip e incrivel"

console.log(frase2.startsWith("Java"))
console.log(frase2.endsWith("!"))

// Exececoes e tratamentos de erros

