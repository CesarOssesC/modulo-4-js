// function C() {
//     console.log("C")
// }

// function B() {
//     C()
// }

// function A() {
//     B()
// }

// A()

// function mostrarResultado(resultado) {
//     console.log(`El resultado es: ${resultado}`)
// }

// function sumar(a, b, callback) {
//     const resultado = a + b
//     callback(resultado)  // esta pasaria a ser la funcion morstrarResultado
// }

// sumar(5, 3, mostrarResultado)

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 3 segundos")
}, 3000)

console.log("Fin")

// function obtenerDatos() {
//     for (let i = 0; i < 1e10; i++) {}
//     return "Datos Obtenidos"
// }

// const datos = obtenerDatos()
// console.log("Datos: ", datos)
// console.log("Esta línea se ejecuta después de obtener los datos")