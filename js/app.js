// voy a hacer una copia de la pagina elclubdelsweater es linda y tinen buenos precios. Me caen bien.


//DATOS de la pagina 

class Productos {
    constructor(id, nombre, imagen, talle, color, precio,){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}
const p1 = new Productos(01, 'milpintas', 'img/remera-manga-larga-gray-pintitas.jpeg', ['s, m, l,'], 'gray', 1950)
const p2 = new Productos(02, 'textura', 'img/remera-manga-larga-textura-black.jpeg', ['s, m, l,'], 'black', 1950)
const p3 = new Productos(03, 'white', 'img/remera-manga-larga-white.jpeg', ['s, m, l,'], 'white', 1950)
const p4 = new Productos(04, 'sweater', 'img/sweater-diesel.jpeg', ['s, m, l,'], 'gray', 5850)
const p5 = new Productos(05, 'infinit', 'img/sweater-infinit-puntos.jpeg', ['s, m, l,'], 'gris', 6400 )
const p6 = new Productos(06, 'jack rayado','img/sweater-rayado-jack.jpg',['s, m, l,'], 'claro', 7000)
// DECLARACIONES

const allproductos = [p1, p2, p3, p4, p5, p6]
let Carrito = []

// ajuste del dom
// adicion de cartas desde el documento js

const primersection = document.querySelector('.contenedor')
allproductos.forEach((producto) =>{
    const cadaproducto = document.createElement('div')
    cadaproducto.innerHTML = `
        <figure>
        <img src= "${producto.imagen}">
        </figure>
        <div class="contenido">
        <h3>${producto.nombre}</h3>
        <p><spam>${producto.precio}</spam></p>
        <botton class ="btn" data-id ="${producto.id}">comprar</botton>
        </div>
        `
        cadaproducto.className = 'card'
        primersection.append(cadaproducto)
    })

    Carrito.forEach((producto)=>{
        const porcadaproducto = document.createElement('div')
        porcadaproducto.innerHTML = `
            <figure class = "padreimg">
                <img src="">
            </figure>
            <div class = "showdes">
                <ul>
                    <li>hola</li>
                    <li>como</li>
                    <li>estas</li>
                </ul>
                    
            </div>
            
        `
        porcadaproducto.className = 'cardEnElCarrito'
        modal.append(porcadaproducto)
    
    })

// const rederizoDatos = () =>{
//     const pantallaDatos = document.querySelector('.pantallaDatos')
//     allproductos.forEach((producto) => {
//         const cadaproducto = document.createElement('div')
//         cadaproducto.innerHTML`

//         `
//         cadaproducto.className = 'pantallaARenderizar'
//         primersection.append(cadaproducto)
//     })
// }

    const btnCompra = document.querySelectorAll('.btn')

    const rederizarVentana = document.querySelector('.open')

    const modalContainer = document.querySelector('.modalContainer')

    const modal = document.querySelector('.modal')

    const cierroVentana = document.querySelector('.close')

    


    const examinarCarrito = document.querySelector('.buttonCarri')

    rederizarVentana.addEventListener('click', () =>{
        modalContainer.classList.add('show')
    })
    cierroVentana.addEventListener('click', () =>{
        modalContainer.classList.remove('show')
    })

// FUNCIONES

const productoElegido = (evento) =>{
    const productoDatos = evento.target.getAttribute('data-id')
    const laSelcion = allproductos.find((producto) => producto.id == productoDatos)
    if(laSelcion){
        const pedirTalle = laSelcion.talle
        prompt('estas son los talles disponibles ' + pedirTalle)
        Carrito.push(laSelcion)
    }
    console.log(Carrito)
    }
    
    btnCompra.forEach((boton) =>{
        boton.addEventListener('click', productoElegido )
    })
    
    const pantallaConDatos = () =>{
    
    }
    
    const valorCarrito = () =>{
        let valorCarrito = 0
        for(const producto of Carrito){
            valorCarrito += producto.precio
        }
        return valorCarrito
    }
    
    
    // EventListeners
    





// Ejecuciones






// aplicacion de liseners 




















    // alert('gracias por su compra su total es de $' + valorCarrito())
    
    // alert('te mostrare por consola los productos')
    // Carrito.forEach(producto =>{
    //     console.log(producto)
    // })
    
    
// Mauro, como estas? todavia me cuesta muchisimo imginar una respuesta a los problemas que me aparecen con los conocimientos que tengo. no se que hacer para tener mas idea de como deberia resolver las situaciones que se me presentan en el codigo. 