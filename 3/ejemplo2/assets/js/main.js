// const titulo = document.getElementsByTagName("h1")
// const titulo = document.getElementsByClassName("titulo")
// console.log(titulo[0].textContent)
// const titulo = document.getElementById("titulo-principal")
// console.log(titulo.textContent)

const titulo = document.querySelector("h1") //selector de etiqueta
const titulo2 = document.querySelector(".titulo") //selector de clase (anteponer al nombre de la clase un .)
const titulo3 = document.querySelector("#titulo-principal") //selector de id (anteponer al nombre del id un #)

console.log(titulo)

const item = document.querySelector("li")
console.log(item.textContent)

const items = document.querySelectorAll("li")
console.log(items)

for (let item of items) {
    console.log(item.textContent)
}

items[3].textContent = "Rust"
console.log(items[3].textContent)

titulo.style.color = "blue"

items.forEach(item => {
    item.style.color = "red"
    item.style.fontSize = "25px"
})

const parrafo = document.querySelector("p")
parrafo.setAttribute("class", "resaltado")

const nuevoParrafo = document.createElement("p")
nuevoParrafo.innerHTML = "<span>Soy un nuevo párrafo creado desde js</span>"
document.body.appendChild(nuevoParrafo)
// document.body.removeChild(nuevoParrafo)
// Object.assign(nuevoParrafo.style, {
//     fontSize: "36px",
//     padding: "20px 0px",
//     backgroundColor: "red"
// })

let px = 24
nuevoParrafo.style.cssText = `font-size: ${px}px; padding: 20px 0px; background-color: red;`

const boton = document.querySelector("#mi-boton")

// boton.onclick = function() {
//     console.log("Click 1")
// }

// boton.onclick = function() {
//     console.log("Click 2")
// }

boton.addEventListener("click", () => {
    console.log("Click 1")
})

boton.addEventListener("click", () => {
    console.log("Click 2")
})

const inputNombre = document.querySelector("#nombre")
inputNombre.addEventListener("blur", ()=> {
    inputNombre.value = inputNombre.value.toUpperCase()
})

inputNombre.addEventListener("keydown", (e) => {
    console.log(`Tecla presionada: ${e.key}`)
})