export default class Animal {
    constructor(nombre, edad, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.peso = peso
        this.altura = altura
    }

    hablar() {
        console.log(`${this.nombre} ha emitido un sonido`)
    }
}