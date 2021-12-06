

/*const button = document.getElementsByTagName("button")[0]
const h1 = document.querySelector("h1")

let contador = 0

button.addEventListener( "click", () =>{
    contador++
    h1.textContent = contador
})
*/

//const h1 = document.querySelector("h1")
//let contador = 0

/*const buttonAumentar = document.getElementById("aumentar")
const buttonDisminuir = document.getElementById("disminuir")


buttonAumentar.addEventListener( "click", (event) =>{
    contador++
    h1.textContent = contador

    console.log( event.target.id )
})

buttonDisminuir.addEventListener( "click", () =>{
    contador--
    h1.textContent = contador
})
*/

/*
let contenedor = document.querySelector("#contenedor-principal")

contenedor.addEventListener( "click", event => {
    if( event.target.id === "aumentar" ){
        contador++
    }else if( event.target.id === "disminuir" ){
        contador--
    }
    h1.textContent = contador
    event.stopPropagation()
})


let body = document.querySelector("body")

body.addEventListener( "click", event => {
    console.log("click en el body")
})
*/

const listaProductos = [
    {
        precio: 20,
        title: "Helado",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 15,
        title: "Chocolate",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 150,
        title: "Pizza",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 75,
        title: "Yogurth",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 35,
        title: "Caramelos",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 100,
        title: "Vino",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 750,
        title: "Caja de dulces",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 40,
        title: "Pan integral",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 200,
        title: "Pastel",
        imgURL: "https://picsum.photos/200/300"
    }
]



let section = document.querySelector("section")
let carritoDeCompras = []
let contador = document.querySelector("#productos-cantidad")
let sumaTotal = document.querySelector("h5")

document.addEventListener( "DOMContentLoaded", () =>{
    mostrarProductos()
})


function mostrarProductos() {
    let fragmentoHTML = "" 

    listaProductos.map( producto =>{
        fragmentoHTML += `
            <div class="card">
                <img src=${ producto.imgURL } alt="">
                <h3>${ producto.title }</h3>
                <p>${ producto.precio }</p>
                <button>Agregar</button>
            </div>
        `
    })

    section.innerHTML = fragmentoHTML
}


section.addEventListener( "click", event =>{
    
    if( event.target.tagName === "BUTTON" ){
        const producto = event.target.parentElement

        let productoObjeto = {
            title : producto.querySelector("h3").textContent,
            price: parseInt( producto.querySelector("p").textContent ),
        }

        agregarCarrito(productoObjeto)
    }

    event.stopPropagation
})


function agregarCarrito(producto) {

    carritoDeCompras.push( producto )
    console.log( carritoDeCompras )
    contador.textContent = carritoDeCompras.length
    calcularTotal()

}

function calcularTotal( ){
    let total = carritoDeCompras.reduce( ( acumulador, current )=> acumulador + current.price, 0 )

    sumaTotal.textContent = `TOTAL: $ ${ total }`
}