import Animal from "./Animal.js"

export default class Pato extends Animal {
    constructor(nombre, edad, peso, altura, raza, plumaje, envergadura) {
        super(nombre, edad, peso, altura)
        this.raza = raza
        this.plumaje = plumaje
        this.envergadura = envergadura
    }

    hablar() {
        console.log(`${this.nombre} dijo Cuack!`)
    }
}