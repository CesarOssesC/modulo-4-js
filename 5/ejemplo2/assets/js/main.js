const nombreSuperHeroe = document.querySelector("#nombreSuperHeroe")
const btnBuscar = document.querySelector("#botonBuscar")
const seccionHeroe = document.querySelector("#seccionHeroe")

let todosLosHeroes = [];

async function cargarHeroes() {
    try {
        const res = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        todosLosHeroes = await res.json()
        // console.log(todosLosHeroes[476].powerstats)
        // console.log(Object.entries(todosLosHeroes[476].powerstats).map(([key, value]) => `${key} - ${value}`))
        // let estadisticas = Object.entries(todosLosHeroes[476].powerstats).map(([key, value]) => `${key} - ${value}`)
        // estadisticas.forEach(e => console.log(e))
        
        // console.log(buscarHeroePorNombre("wolverine"))
    } catch (error) {
        console.error("Error al cargar los datos: ", error)
    }
}

function buscarHeroePorNombre(nombre) {
    return todosLosHeroes.find(heroe => heroe.name.toLowerCase() === nombre.toLowerCase())
}

function mostrarHeroe(heroe) {
    const listaEstadisticas = Object.entries(heroe.powerstats)
        .map(([key, value]) => `<li class="list-group-item"><span class="text-capitalize">${key}</span>: <span class="fw-bold">${value}</span></li>`)
        .join("")

    seccionHeroe.innerHTML = `
        <div class="col-md-6">
            <div class="card">
                <img src="${heroe.images.lg}" class="card-img-top" alt="${heroe.name}" style="height: 50vh; object-fit: contain">
                <div class="card-body">
                    <h5 class="card-title">${heroe.name}</h5>
                    <ul class="list-group list-group-flush">
                        ${listaEstadisticas}
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card">
                <h5 class="card-title">Estadísticas de Poder</h5>
                <canvas id="graficoEstadisticas"></canvas>
            </div>
        </div>
    `
    crearGraficoRadar(heroe.powerstats)
}

function crearGraficoRadar(estadisticas) {
    const ctx = document.getElementById("graficoEstadisticas")

    new Chart(ctx, {
        type: "radar",
        data: {
            labels: Object.keys(estadisticas),
            datasets: [{
                label: "Atributos",
                data: Object.values(estadisticas),
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderColor: "#ff0000"
            }]
        },
        options: {
            r: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    })
}

btnBuscar.addEventListener("click", () => {
    const nombre = nombreSuperHeroe.value.trim()

    if (!nombre) {
        alert("Por favor escribe un nombre")
        return
    }

    const heroe = buscarHeroePorNombre(nombre)
    
    if (heroe) {
        mostrarHeroe(heroe)
    } else {
        seccionHeroe.innerHTML = `<p class="text-center my-5 text-warning">No se encontró el heroe: ${nombre} en nuestra base de datos, por favor revisa el nombre e intenta nuevamente.</p>`
    }
})

nombreSuperHeroe.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        
    
        const nombre = nombreSuperHeroe.value.trim()

        if (!nombre) {
            alert("Por favor escribe un nombre")
            return
        }

        const heroe = buscarHeroePorNombre(nombre)

        if (heroe) {
            mostrarHeroe(heroe)
        } else {
            seccionHeroe.innerHTML = `<p class="text-center my-5 text-warning">No se encontró el heroe: ${nombre} en nuestra base de datos, por favor revisa el nombre e intenta nuevamente.</p>`
        }

    }
})

cargarHeroes()


