//let nombre_persona = ["pera", "banano"]
//console.log(nombre_persona)

//scope variables


//scope global

//let global ="Global"

//scope local
//function miLocal(){
//let local = "Soy local"
//console.log(local)

//}

//function miFuncion(){
//console.log(global,nombre_persona,local)

//}

//if(true){
 //let insideBlock= "Estoy en bloque"
 //console.log(insideBlock)

//}

//Declaracion Variables
//var edad =20

//if(edad>=18){
//let es_adulto = true;

//}
//console.log(es_adulto)

//let block ="hola"
//const perro ="Juan"

//Operadores logios y estructuras de control

//let edad =20
//if(edad>=18){
//console.log("Eres mayor de edad");

//}else{
    //console.log("Menor de edad")
//}

//condicional ternario

//edad >=18 ? console.log('Eres mayor de edad'):console.log("Menor de edad")
//Else-if

//let puntaje = 75;

//if(puntaje>=90){
//console.log("Excelente")
//}else if(puntaje>=70){
//console.log("Sobresaliente")

//}else{
   // console.log("Sigue intentando")
//}

//bucle -loops

//for
//for(let i=0; i<=5;i++){
//console.log("Iteracion"+i)

//}

//bucle while

//let contador =0;
//while(contador<3){
//console.log("Contando"+ contador)
//contador++;

//}

//switch-case

let diaSemana ="Martes"

switch(diaSemana){
  case "Lunes":
  console.log("Hoy es lunes")
  break;
  case "Martes":
    console.log("Hoy es martes")
    break;
    default:
        console.log("Hoy no es ninguno de los dias")
}

//try-catch

/*try{
    let resultado =10/0;
    console.log(resultado)
}catch(error){
console.log("Error", error.message);

}*/

//Operadores_logicos

//&&(and logico)

/*let edad_bool = false;
let persona = true;

if(edad_bool && persona){
 console.log("Ambos son verdaderos")
}else{
 console.log("Hay uno que no es verdadero")
}

// || (or logico)

if(edad_bool || persona){
 console.log("Una de las dos es verdadera")

}else{
    console.log("ambas son falsas")
}

// !(Not logico)

console.log(!edad_bool)

let nombre = ""

if(nombre === "" || nombre ===null || nombre === undefined){
    console.log("El nombre no esta definido")
}
if(!nombre){
    console.log('El nombre no esta definido');
}

//comparador de igualdad(==)
console.log(5==5)
console.log(5==10)
console.log(5=='5')

//Comparador de igualdad estricto(===)

console.log(5 ===5)
console.log(5=== '5')

//comparacion de desigualdad(!=)
console.log( 5 !=10)
console.log('Hello'!= 'Adios')
console.log(5 != '5')

console.log(3<=2)*/


//objetos
/*let persona = {
 nombre: "Jesus",
 edad : 26,
 casado: false,
 hobbies:["Leer","Conducir"]

}
console.log(persona.edad)

persona.ciudad = 'Medellin'
persona.edad =50
delete persona.casado
console.log(persona)


//arrays
let colores = ["Blanco", "Azul"," Verde"]
console.log(colores)
console.log(colores[2])
console.log(colores[0])

//metodos--concat

let frutas1 = ["manzana","Pera"]
let frutas2 = ["Uva","Naranja"]

let todaslasFrutas = frutas1.concat(frutas2)
console.log(todaslasFrutas)

//Includes--elemento en especifico esta presente en el arreglo
console.log(frutas2.includes("Naranja"))

//indexOf

let frutas =['Manzanas','Peras','Fresas'];
console.log(frutas.indexOf("Peras"))
//push

frutas.push("Uvas","Guayabas", "Mango")
console.log(frutas)

//Metodo Pop--ultimo elemento del array

let UltimoElemento = frutas.pop();

console.log(UltimoElemento)

console.log(frutas)

//Shift

let PrimerElemento = frutas.shift();

console.log(PrimerElemento)


//Unshift

frutas.unshift("Uvas","Papaya","Limon")

console.log(frutas)

//reverse

let letras = ['a','b','c','e']

letras.reverse();

console.log(letras)*/

//programacion funcional --paradigma de programacion dandole prioridad a funciones

//asignar una funcion a ua variable

/*const suma = function(a ,b){

    return a + b;
}

console.log(suma(3,5))

//Pasar funcion como argumento a otra funcion 

function operacion(a,b,funcion){
return funcion(a,b)

}

console.log(operacion(4,7,suma))


//retornar una funcion como resultado de otra funcion

function multiplicador(numero1){
    return function(numero2){
        return  numero1 * numero2
    }
}
const PrimerLlamado = multiplicador(2)
console.log(PrimerLlamado(5));

//almacenar funciones en estructuras de datos

const funciones ={
 suma: function(a,b){

    return a + b;
 },
 nombre: 'Jesus',
 resta: function(a, b){
    return a - b;
 }
}
console.log(funciones.suma(5,3))*/

//Funciones puras

//function sumaPura(a, b){
//return a + b;

//}

//console.log(sumaPura(3,2))






//Funcion Impura

/*let contador = 0

function suma(num){
contador += num;
return contador;

}
console.log(suma(5));
console.log(suma(3));

//inmmutabilidad

let  persona = {
nombre: "Jesus",
edad: 45

}

persona.edad = 10

console.log(persona)*/

//Objeto inmutable

/*let  persona = Object.freeze ({

    nombre: "Jesus",
    edad: 45,
})
persona.edad = 10

console.log(persona);*/

//copia inmutable de objeto

/*let  persona = {

    nombre: "Jesus",
    edad: 45,
}
const copiaPersona ={...persona, edad :90,nacionalidad:"Colombiano"}

console.log(copiaPersona)

//arrow functions /Funciones flecha
function Saludo(){



}
const Saludo2 = () => console.log('Hola')

Saludo2()

const sumar = (a,b) =>{
 return a + b

}
console.log(sumar(3,10));*/

//Declarativa--map
/*const numeros = [1,2,3,4,5,6]

const cuadradosDeclarativos = numeros.map(num => num * num)

console.log(cuadradosDeclarativos)*/






//Imperativa



//let cuadrados = []

//for(let i =0;i < numeros.length; i++){

    //cuadrados.push(numeros[i]* numeros[i])
//}
//console.log(cuadrados)

//filter

/*const numeros = [1,2,3,4,5,6] 

const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares)*/

//reduce

//const numeros = [1,2,3,4,5,6] 

//const suma = numeros.reduce((acc,curr)=> acc + curr,0)
//console.log(suma)

//ForEach

/*const numeros = [1,2,3,4,5,6] 

numeros.forEach(function(numero,index){
console.log('Numero en la posicion ${index}:${numero}')

})*/

//Find

/*const frutas = ["Manzana","Peras","Maracuya","Pera"]

const Frutaencontrada = frutas.find(fruta => fruta ==="Pera")
   
console.log(Frutaencontrada)*/

//some--devolvera valor bool

/*const frutas = ["Manzana","Peras","Maracuya","Pera"]

const resultado = frutas.some(fruta=> fruta === "Limon")

console.log(resultado)*/

//ASINCRONISMO, PROMESAS, CALLBACKS, ASYNC AWAIT

//Sincronismo
/*console.log('Paso 1');
console.log('Paso 2');
console.log('Paso 3');

//Callbacks--asincronismo

mostrarMensaje = (mensaje, funcionCallback) =>{
console.log('Mensaje recibido:',mensaje);

setTimeout(() =>{

    funcionCallback();

} ,5000)

}

funcionCallback = () => {
console.log("CallbackEjecutado")

}

mostrarMensaje("Hola mundo", funcionCallback);

//Promesas

const  ObtenerNumeroAleatorio = () =>{
  return new Promise((resolve, reject)=>{

    const numero = Math.random()

  if(numero > 0.5){
 resolve(numero)

  }else{
    reject("El numero es menor o igual a 0.5")

  }
  })
  
}

ObtenerNumeroAleatorio()
.then((numero) =>{
console.log("Numero obtenido:", numero)

})

.catch((error) => {
 console.log("Error:", error)

});*/

//Async await

/*const  ObtenerNumeroAleatorio = () =>{
    return new Promise((resolve, reject)=>{
  
      const numero = Math.random()
  
    if(numero > 0.5){
   resolve(numero)
  
    }else{
      reject("El numero es menor o igual a 0.5")
  
    }
    })
    
  }
  
  ObtenerNumeroAleatorio()
  .then((numero) =>{
  console.log("Numero obtenido:", numero)
  
  })
  
  .catch((error) => {
   console.log("Error:", error)
  
  });

  const ObtenerYMostrarNumeroAleatorio = async () =>{
  try{
   const numero = await ObtenerNumeroAleatorio();
   console.log("Numero obtenido:", numero);

   }catch(error){
     console.log("Ocurrio un error", error)


   }

  };

  ObtenerNumeroAleatorio();*/

//Solicitudes HTTP
//get--recuperar datos
//Post--Guardar
//Put- editar
//Delete -Eliminar

//Fetch API
//const BaseUrl = 'https://rickandmortyapi.com/api/episode/10';
//fetch(BaseUrl)
//.then(response => response.json())
//.then(datos => console.log(datos))

//async await

/*const fetchdata = async() =>{

try{

const UrlBase ='https://rickandmortyapi.com/api/episode/22'
const response = await fetch(UrlBase)
const data = await response.json()
console.log(data)

}catch(error){

console.log('Error:', error)

}

}

fetchdata();*/

/*const BaseUrl = 'https://jsonplaceholder.typicode.com/';
const endpoint = '/posts/1';
const url =`${BaseUrl}${endpoint}`;




const options= {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    },
   
}
fetch(url, options)
.then(response => response.json())
.then(datos => console.log(datos))*/

//dom