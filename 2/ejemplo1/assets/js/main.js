// // var nombre = "César"

// let nombre = "César"

// const edad = 33

// // edad = 34

// function ejemploAlcance() {
//     if(true) {
//         var mensaje = "Hola desde dentro de la función y el IF"
//     }
//     console.log(mensaje)
// }

// ejemploAlcance()


// function saludar(nombre = '"ingresa tu nombre"') {
//     console.log(`Hola mi nombre es ${nombre}`)
// }

// saludar()

// function sumar(a, b = 0) {
//     console.log(a + b)
// }

// sumar(5)
// console.log(sumar(5, 3))

// function sumar(a, b) {
//     return a + b
// }


// const sumar = (a, b) => a + b

// const sumar = (a, b) => {
//     const resultado = a + b
//     return resultado
// }

// console.log(sumar(5, 7))


// let nombre = "César"
// let apellido = "Osses"

// console.log("Hola, mi nombre es " + nombre + " " + apellido)
// console.log(`Hola, mi nombre es ${nombre} ${apellido}`)


// const numeros = [1, 2, 3, 4, 5]

// const [ primerNumero, num2, num3 ] = numeros
// // const [ , ,num3 ] = numeros

// // let num1 = numeros[0]
// // let num2 = numeros[1]
// // let num3 = numeros[2]
// console.log(primerNumero)
// // console.log(num2)
// console.log(num3)

// const persona1 = {
//     nombre: "Jane Doe",
//     edad: 35,
//     correo: "jane.doe@gmail.com"
// }

// const { nombre, edad, correo } = persona1

// console.log(nombre)

// let nombre = persona1.nombre
// let edad = persona1.edad

// const numeros = [1, 2, 3, 4, 5]

// console.log(...numeros)

// const numeros2 = [...numeros, 6, 7, 8, 9, 0]
// console.log(numeros2)

// numeros2.forEach(n => console.log(n))

// const objetoOriginal = {
//     nombre: "Juan",
//     edad: 30
// }

// const objetoClonado = {
//     ...objetoOriginal,
//     correo: "juan@correo.com"

// }

// console.log(objetoClonado)


// const numeros = [1, 2, 3, 4, 5]

// const [ primero, ...resto ] = numeros
// // const [...resto, primero] = numeros X


// console.log(primero)
// console.log(resto)

// const sumar = (...numeros) => numeros.reduce((total, n) => total + n, 0)

// console.log(sumar(1, 6, 7, 89, 234, 657, 98))

// const persona1 = {
//     nombre: "Jane Doe",
//     edad: 35,
//     correo: "jane.doe@gmail.com"
// }

// const { nombre, ...datos } = persona1

// console.log(nombre)
// console.log(datos)

// const arreglo = [1, 2, 43, 5, 7, 43, 8, 9, 1, 5, 89, 56, 7]
// const numeros = new Set(arreglo)
// numeros.add(101)
// numeros.delete(5)
// numeros.has(43)
// // numeros.clear()
// console.log(numeros)
// console.log(numeros.has(1))

// const mapa = new Map()
// mapa.set("nombre", "Juan")
// mapa.set("edad", 30)
// mapa.set("correo", "juan@correo.com")

// // mapa.delete("edad")
// // mapa.clear()
// console.log(mapa)
// console.log(mapa.get("nombre"))
// console.log(mapa.has("nombre"))


// const numeros = [1, 2, 3, 4, 5]

// // for (let numero of numeros) {
// //     console.log(numero)
// // }

// const iterador = numeros[Symbol.iterator]()

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())


// function* generadorNumeros() {
//     yield 1
//     yield 2
//     yield 3
// }

// const generador = generadorNumeros()

// console.log(generador.next())
// console.log(generador.next())
// console.log(generador.next())


// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad
//     }

//     saludar() {
//         console.log(`Hola, mi nombre es ${this.nombre}`)
//     }
// }

// function Estudiante(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
// }

// Estudiante.prototype.saludar = function() {
//     console.log(`Hola, mi nombre es ${this.nombre}`)
// }

// const estudiante1 = new Estudiante("Pablo" , 45)
// console.log(estudiante1)