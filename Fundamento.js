// Fundamentos 
// var nome = valor
// barra barra sao comentarios na mesma linha
/* pode colocar comentario dentro ate 250 caracteres  */
// ponte e virgula nao e obrigatorio
var minhaVariaveis= "Ola Mundo"
console.log(minhaVariaveis)

var meuNumero = 10
console.log(meuNumero)
console.log(meuNumero = 5)
console.log(typeof meuNumero)
console.log(minhaVariaveis)

var booleano = true // false
console.log(typeof booleano)

var meuObjeto = {}
var meuArray = []
var meuNull = null
var meuUndefined = undefined

console.log(typeof meuObjeto)
console.log(typeof meuArray)  
console.log(typeof meuNull)  
console.log(typeof meuUndefined) 

// let e const
// nova forma de declar variaveis
let x = 10
const y = 5
x = 15
console.log(typeof x)
console.log (x,y)

// Operadores aritmetricos

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y) 

// Operadores de comparacao

console.log(x == y)
console.log(x |= y)
console.log(x > y)

console.log("5" == 5)
console.log("5" === 5)
console.log("5" !==  5)

//Operadores logicos
//AND &&
//OR ||

console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5 )
console.log(10 < 5 && 20 < 5)

console.log(10 > 5|| 20 > 5)
console.log(10 > 5|| 20 < 5)
console.log(10 < 5 || 20 < 5)

//conversao de tipos

const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2)

console.log(meuNumeroConvertido)

console.log(typeof meuNumeroConvertido)
console.log(typeof meuNumero)

// Estrutura de condicao (if, else , else if)

const  idade = 32

 if (idade < 13){
    console.log("Crianca")
 } else if (idade < 20){
    console.log("Adolecente")
 } else {
    console.log("Adulto")
 }

 if (false){
    console.log("Isso e exeultavle")
 }else {
    console.log("Isso agora e executavel")
 }

 // Switch
 // cada case tem que ter brack para nao repetir

 const fruta ="Maca"

 switch(fruta){
    case "banana":
    console.log("banana e a fruta")
    break
    case "Maca":
    console.log("Maca e a fruta") 
    break 
    default:
        console.log("Fruta nao encontrada") 
 }
 // Estrutura de repeticao
 //1,2,3,4,5,6,... depedendo de uma condicao
 // for = contador, condicao de limite e incremento

 for (let i = 0; i < 5; i++ ) {
    console.log("O valor de i e:" + i)
 }

 //while
 let k = 0
 while(k < 5){
   k  ++
   console.log("O valor de K")
 }
 // do while
 let j = 0
   do{
      console.log("O valor de J") 
      j ++
   }while(j < 5)   
 
 //funcoes 
 // function nome (argumento1,argumento 2 {corpo})

   function cumprimentar(nome){
   console.log("Olá" +  nome)
   }
 //invocacao = nome
   cumprimentar(" Sergio ")

 //escopo de variaveis
   let cor = "azul"

   function mostraCor(){
   let cor = ("veremelho")

   console.log(cor)   
   } 
   console.log(cor)
  mostraCor()

  //hoisting = icamento
  testeHoisting()

  function testeHoisting(){
   console.log("Deu certo")
  }
  //arrow function
  const testeArrow =() => console.log("Isso tambem e uma funcao")
  testeArrow()

  // truthy e falsy
  const minhaVariaveis1 = "" //falsy
  const minhaVariaveis2 = "Alguma coisa"

  if(minhaVariaveis1){
   console.log("E verdadeiro !")
  }else{
   console.log("E falso !")

  }  
  if(minhaVariaveis2){
   console.log("E verdadeiro ! 2")
  }else{
   console.log("E falso 2")

  }

  //arry, listas

  const numeros = [1,2,3,4,5]
  console.log(numeros)
  console.log(numeros[0])

  numeros.push(6)
  console.log(numeros)

  // prototype => OBJETO -> objeto2
  // Arryn=> nossos arrays
  numeros.pop()
  console.log(numeros)

  // string
  const minhaStrinhNova = (" Ola Mundo!")

  // concantenacao = +
  const minhaString3 = minhaStrinhNova + " Como voce esta"

  console.log(minhaString3)

  // interpolacao  
  const minhaString4 = `${minhaStrinhNova} Como voce esta !!` 
  console.log(minhaString4)

  console.log(minhaString4.length) // qta de cacacteres
  console.log(minhaString4[6])// caracteres da letra
  console.log(minhaString4.toUpperCase())// deixa em caixa alta

  // data e hora

  const agora = Date ()  
  console.log (agora)

  const natal = new Date (2024, 11, 25)
  console.log(natal)

  //Math
  console.log(Math.PI) // resultado do PI

  console.log(Math.round(5,499)) // aredondamento

  console.log(Math.sqrt(21)) // raiz quadrada

  console.log(Math.pow(2, 6)) // expoente







