// voy a hacer una copia de la pagina elclubdelsweater es linda y tinen buenos precios. Me caen bien.

class Productos {
    constructor(id, nombre, imagen, talle, color, precio,){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this. talle = talle;
        this.color = color;
        this. precio = precio;
    }
}
const p1 = new Productos(01, 'milpintas','img/remera-manga-larga-gray-pintitas.jpg', ['s, m, l,'], 'gray', 1950)
const p2 = new Productos(02, 'textura', 'img/remera-manga-larga-textura-black.jpg', ['s, m, l,'], 'black', 1950)
const p3 = new Productos(03, 'white', 'img/remera-manga-larga-white.jpg', ['s, m, l,'], 'white', 1950)
const p4 = new Productos(04, 'sweater', 'img/sweater-diesel.jpg', ['s, m, l,'], 'gray', 5850)

const Remera = [p1, p2, p3]
const Sweater = [p4]

let Carrito = []
function eleccion (){

let bienvenido = prompt('remera o sweater, ¿que te interesa ver?').toLowerCase()
switch (bienvenido) {
    case 'remera':
        let elejiremera = prompt('estas son las remeras disponibles: milpintas, textura, white').toLowerCase()
        let remera = Remera.find(element => element.nombre == elejiremera)
        if(remera){
            prompt('que talle buscabas: ' + remera.talle + ' ?')
            Carrito.push(remera)
        }
        break;

    case 'sweater':
    let elijesweater = prompt('estos son los que tenemos en stock: "sweater"').toLowerCase()
    let sweater = Sweater.find(element => element.nombre == elijesweater)
    if(sweater){
        prompt('que talle buscas: ' + sweater.talle + ' ?')
        Carrito.push(sweater)
    }
        break;

    default:
        alert('el articulo ingresado no se encuentra en stock')
        break;
}
if (confirm('desea seguir comprando?')){
    eleccion()
}
}




// adicion de cartas desde el documento js

const primersection = document.querySelector('.contenedor')
Remera.forEach((producto) =>{
    const remeritas = document.createElement('div')
    remeritas.innerHTML =`
    <figure>
        // <img src="${producto.imagen}">
        </figure>
        <div class="contenido">
        <h3>remera ${producto.nombre}</h3>
        <p><spam>${producto.precio}</spam></p>
        <botton class ="btn" data-id ="${producto.nombre}">comprar</botton>
        </div>
        `
        remeritas.className = 'card'
        primersection.append(remeritas)
    })
    
    const segSection = document.querySelector('.contenedor')
    Sweater.forEach((producto) =>{
        const sweaters = document.createElement('div')
        sweaters.innerHTML = `
        <figure>
        // <img src="${producto.imagen}">
        </figure>
        <div class="contenido">
        <h3>${producto.nombre}</h3>
        <p><spam>${producto.precio}</spam></p>
        <botton class ="btn" data-id ="${producto.nombre}">comprar</botton>
        </div>
        `
        sweaters.className = 'card'
        segSection.append(sweaters)
    })
    
    // eleccion()
    
    // console.log(Carrito)
    
// aplicacion de liseners 





const talle = (evento) =>{
console.log(evento.target)
    const productoElijido = evento.target.getattribute('data-id')
    // console.log(productoElijido)
}
console.log(Carrito)
    // Remera.forEach((remeras) =>{
    //     prompt('que talle buscabas: ' + remeras.talle + ' ?')
    // })
    // for(talle of loque);




const btnCompra = document.querySelectorAll('.btn')
btnCompra.forEach((boton) =>{
    boton.addEventListener('click', talle )
})

// console.log(Carrito)




    
    
    
    const valorCarrito = () =>{
        let valorCarrito = 0
        for(const producto of Carrito){
            valorCarrito += producto.precio
        }
        return valorCarrito
    }
    alert('gracias por su compra su total es de $' + valorCarrito())
    
    alert('te mostrare por consola los productos')
    Carrito.forEach(producto =>{
        console.log(producto)
    })
    
    
// Mauro, como estas? todavia me cuesta muchisimo imginar una respuesta a los problemas que me aparecen con los conocimientos que tengo. no se que hacer para tener mas idea de como deberia resolver las situaciones que se me presentan en el codigo. 