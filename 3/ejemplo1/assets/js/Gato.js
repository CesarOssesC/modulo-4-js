import Animal from "./Animal.js"

export default class Gato extends Animal {
    constructor(nombre, edad, peso, altura, raza, color) {
        super(nombre, edad, peso, altura)
        this.raza = raza
        this.color = color
    }

    hablar() {
        console.log(`${this.nombre} dijo Miauuuuuu!`)
    }
}
