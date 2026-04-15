// let valor = 0

// function sumar1(callback) {
//     setTimeout(() => {
//         callback(valor += 1)
//     }, Math.random() * 2000)
// }

// function sumar2(callback) {
//     setTimeout(() => {
//         callback(valor += 2)
//     }, Math.random() * 2000)
// }

// sumar1((num) => {
//     console.log(`sumar1 termino con el valor: ${num}`)
//     sumar2((num) => {
//         console.log(`sumar2 termino con el valor: ${num}`)
//     })
// })


// const promesa = new Promise((resolve, reject) => {
//     const exito = false
//     if(exito) {
//         resolve("Operación exitosa")
//     } else {
//         reject("Hubo un error")
//     }
// })


// promesa
//     .then((resultado) => {
//         console.log(resultado)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

const numeroAlAzar = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
}

const promesa1 = new Promise((resolve) => {
    setTimeout(() => resolve(1), numeroAlAzar(500, 3000))
})

const promesa2 = new Promise((resolve) => {
    setTimeout(() => resolve(2), numeroAlAzar(500, 3000))
})

const promesa3 = new Promise((resolve) => {
    setTimeout(() => resolve(3), numeroAlAzar(500, 3000))
})

// promesa1
//     .then((resp1) => {
//         console.log(resp1)
//         return promesa2
//     })
//     .then((resp2) => {
//         console.log(resp2)
//         return promesa3
//     })
//     .then((resp3) => {
//         console.log(resp3)
//     })

// Promise.all([promesa1, promesa2, promesa3])
//     .then(response => console.log(response))

// Promise.allSettled([promesa1, promesa2, promesa3])
//     .then(response => console.log(response))


// Promise.race([promesa1, promesa2, promesa3])
//     .then(response => console.log(response))

function a() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Esta función demoró 3 segundos")
        }, 3000)
    })
}

function b() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Esta función demoró 1 segundos")
        }, 1000)
    })
}

// console.log("Inicio")
// a().then(res => console.log(res))
// b().then(res => console.log(res))
// console.log("Fin")

async function llamadaAsync() {
    console.log("Inicio")

    const resultadoA = await a()
    console.log(resultadoA)

    const resultadoB = await b()
    console.log(resultadoB)

    console.log("Fin")
}

llamadaAsync()