const input = document.querySelector("#celsius")
const boton = document.querySelector("#convertir")
const resultado = document.querySelector("#resultado")

function convertir() {
    const celsius = parseFloat(input.value)

    if (isNaN(celsius)) {
        resultado.textContent = "Por favor ingresa una temperatura válida"
        return;
    }

    const farenheit = (celsius * 9/5) + 32

    resultado.textContent = `${celsius}°C equivalen a ${farenheit}°F`

    input.value = ""
}

boton.addEventListener("click", convertir)

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertir()
    }
})