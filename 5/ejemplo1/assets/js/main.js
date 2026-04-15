// const xhr = new XMLHttpRequest()
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
// xhr.onload = () => {
//     if (xhr.status === 200) {
//         console.log(JSON.parse(xhr.responseText))
//     }
// }

// xhr.send()

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error))


async function obtenerUsuarios() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)
        // console.log(data[3].name)
        // console.log(`Nombre: ${data[3].name} - Correo: ${data[3].email}`)
        data.forEach(user => {
            console.log(`Nombre: ${user.name} - Correo: ${user.email}`)
        })

    } catch (error) {
        console.error(error)
    }
}

obtenerUsuarios()