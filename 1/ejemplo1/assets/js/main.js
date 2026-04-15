// let arreglo = [1, 2, 3, 4, 5]
// console.log(arreglo.length)
// arreglo.push(6)
// console.log(arreglo)

// const persona = {
//     nombre: "Jane Doe",
//     edad: 33
// }

// console.log(persona)

// class Persona {
//     constructor(nombre, edad, sexo) {
//         this.nombre = nombre
//         this.edad = edad
//         this.sexo = sexo
//     }

//     saludar() {
//         console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}.`)
//     }
// }

// const persona1 = new Persona("Jane Doe", 35, "femenino")
// console.log(persona1)
// console.log(persona1.nombre)
// persona1.saludar()

// const persona2 = new Persona("John doe", 39, "masculino")
// console.log(persona2)
// console.log(persona2.nombre)
// persona2.saludar()

// const persona3 = new Persona(35, "masculino", "Juan")
// console.log(persona3)

// class Animal {
//     constructor(nombre, edad, peso, altura) {
//         this.nombre = nombre
//         this.edad = edad
//         this.peso = peso
//         this.altura = altura
//     }

//     hablar() {
//         console.log(`${this.nombre} ha emitido un sonido`)
//     }
// }

// class Gato extends Animal {
//     constructor(nombre, edad, peso, altura, raza, color) {
//         super(nombre, edad, peso, altura)
//         this.raza = raza
//         this.color = color
//     }

//     hablar() {
//         console.log(`${this.nombre} dijo Miauuuuuu!`)
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, edad, peso, altura, raza, color, size) {
//         super(nombre, edad, peso, altura)
//         this.raza = raza
//         this.color = color
//         this.size = size
//     }

//     hablar() {
//         console.log(`${this.nombre} dijo Guauuuu!`)
//     }
// }

// class Pato extends Animal {
//     constructor(nombre, edad, peso, altura, raza, plumaje, envergadura) {
//         super(nombre, edad, peso, altura)
//         this.raza = raza
//         this.plumaje = plumaje
//         this.envergadura = envergadura
//     }

//     hablar() {
//         console.log(`${this.nombre} dijo Cuack!`)
//     }
// }


// const gato1 = new Gato("Leia", 7, "6kg", "0.3mt", "comun de pelo largo", "blanca con negro")
// console.log(gato1)
// gato1.color = "cafe"
// console.log(gato1.color)
// gato1.hablar()

// const perro1 = new Perro("Firulais", 5, "20kg", "0.6mt", "labrador", "negro", "grande")
// console.log(perro1)
// console.log(perro1.color)
// perro1.hablar()

// const pato1 = new Pato("Donald", 9, "15kg", "0.7mt", "pato comun", "blanco", "0.9mt")
// console.log(pato1)
// console.log(pato1.plumaje)
// pato1.hablar()

// class Persona {
//     constructor(nombre, edad, sexo) {
//         this._nombre = nombre
//         this.edad = edad
//         this.sexo = sexo
//     }

//     get getNombre() {
//         return this._nombre
//     }

//     set setNombre(nuevoNombre) {
//         this._nombre = nuevoNombre
//     }

//     saludar() {
//         console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}.`)
//     }
// }

// const persona1 = new Persona("Jane Doe", 35, "femenino")
// console.log(persona1)
// // persona1.nombre = "Jane González"
// persona1.getNombre = "Jane González"
// console.log(persona1.getNombre)
// console.log(persona1._nombre)
// persona1.saludar()

// const persona2 = new Persona("John doe", 39, "masculino")
// console.log(persona2)
// persona2.setNombre = "Pablo Picasso"
// console.log(persona2.getNombre)
// persona2.saludar()


class Persona {
    #nombre;
    constructor(nombre, edad, sexo) {
        this.#nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.#nombre} y tengo ${this.edad}.`);
    }
}

// const persona1 = new Persona("Jane Doe", 35, "femenino")
// console.log(persona1)
// // persona1.nombre = "Jane González"
// // persona1.getNombre = "Jane González"
// // console.log(persona1.getNombre)
// console.log(persona1.getNombre)
// persona1.saludar()

// const persona2 = new Persona("John doe", 39, "masculino")
// console.log(persona2)
// persona2.setNombre = "Pablo Picasso"
// console.log(persona2.getNombre)
// persona2.saludar()

// function Persona(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
// }

// Persona.prototype.saludar = function() {
//     console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}.`)
// }

// const persona1 = new Persona("Juan", 35)
// console.log(persona1)
// persona1.saludar()