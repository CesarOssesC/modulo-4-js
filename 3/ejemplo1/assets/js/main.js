import Gato from "./Gato.js"
import Perro from "./Perro.js"
import Pato from "./Pato.js"


const gato1 = new Gato("Leia", 7, "6kg", "0.3mt", "comun de pelo largo", "blanca con negro")
console.log(gato1)
gato1.color = "cafe"
console.log(gato1.color)
gato1.hablar()

const perro1 = new Perro("Firulais", 5, "20kg", "0.6mt", "labrador", "negro", "grande")
console.log(perro1)
console.log(perro1.color)
perro1.hablar()

const pato1 = new Pato("Donald", 9, "15kg", "0.7mt", "pato comun", "blanco", "0.9mt")
console.log(pato1)
console.log(pato1.plumaje)
pato1.hablar()