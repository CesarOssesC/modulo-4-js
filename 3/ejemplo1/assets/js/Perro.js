import Animal from "./Animal.js"

export default class Perro extends Animal {
    constructor(nombre, edad, peso, altura, raza, color, size) {
        super(nombre, edad, peso, altura)
        this.raza = raza
        this.color = color
        this.size = size
    }

    hablar() {
        console.log(`${this.nombre} dijo Guauuuu!`)
    }
}