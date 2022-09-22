// voy a hacer una copia de la pagina elclubdelsweater es linda y tinen buenos precios. Me caen bien.

// DECLARACIONES
let allProductos = []
let Carrito = []

fetch('../data/productos.json')
    .then((Response) => Response.json())
    .then((respuesta) =>{
        allProductos = respuesta
        loadProductos(respuesta)
        console.log(allProductos)
        guardarDatos()
    });

const productoElegido = (evento) =>
{
    const productoDatos = evento.target.getAttribute('data-id')
    const laSeleccion = allProductos.find((producto) => producto.id == productoDatos)
    if(laSeleccion){
            const { value: talle } = Swal.fire({
                title: 'Por favor elije un talle',
                input: 'select',
                inputOptions: {
                'Talles': {
                    s: 's',
                    m: 'm',
                    l: 'l',  
                },
                },
                inputPlaceholder: 'elije un talle',
                showCancelButton: true,
                inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 's' || 'm' || 'l') {
                    resolve()
                    } else {
                    resolve('You need to select a zise :)')
                    }
                })
                }
            })
            if (talle) {
                Swal.fire(`You selected: ${talle}`)
            }
                // Swal.fire({
                //     title: 'Cuantas quieres llevar?',
                //     icon: 'question',
                //     input: 'range',
                //     inputLabel: 'cantidad',
                //     inputAttributes: {
                //     min: 1,
                //     max: 10,
                //     step: 1
                //     },
                //     inputValue: 1
                // })
        Carrito.push(laSeleccion)
        carritoProducto()
        // guardarDatos()
    }
}
// adicion de cartas desde el documento js
const loadProductos = (respuesta) =>{
    console.log('load')
    const primersection = document.querySelector('.contenedor')
    respuesta.forEach((producto) =>{
        const cadaproducto = document.createElement('div')
        cadaproducto.innerHTML = `
        <figure>
        <img src= "${producto?.imagen}">
        </figure>
        <div class="contenido">
        <h3>${producto?.nombre}</h3>
        <p><spam>${producto?.precio}</spam></p>
        <botton class ="btn" data-id ="${producto?.id}">comprar</botton>
        </div>
        `
        cadaproducto.className = 'card'
        primersection.append(cadaproducto)
    })
    const btnCompra = document.querySelectorAll('.btn');
    btnCompra.forEach((boton) =>{
        boton.addEventListener('click', productoElegido )
    });
}

    // const productoParaSacar = (respuesta) => {
    //     const item = Carrito.find((id) => id === respuesta.id)
    //     const indice = Carrito.indexOf(item)
    //     Carrito.splice(indice, 1)
    //     actualizarCarrito()
    //     console.log(item)
    //     console.log(indice)
    // }

carritoProducto = () =>{
    const porcadaproducto = document.createElement('div')
    porcadaproducto.innerHTML = ``
    Carrito.forEach((producto)=>{
        porcadaproducto.innerHTML = `
        <figure class = "padreimg">
            <img src="${producto.imagen}">
        </figure>
        <div class = "showdes">
            <ul>
            <li>${producto?.nombre}</li>
            <li>${producto?.id}</li>
            <li>${producto?.precio}</li>
            </ul>
        </div>
        <div class ="contengoBtn">
        <button class="sacarDelCarrito" id="${producto.id}">x</button>
        </div>
        `
        porcadaproducto.className = 'cardEnElCarrito'
        modal.append(porcadaproducto)
    })
    const eliminarProducto = document. querySelectorAll(".sacarDelCarrito")
    eliminarProducto.forEach((boton)=>{
        boton.addEventListener('click', ()=>{
            const item = Carrito.find((item) => item.id == boton.id)
            const indice = Carrito.indexOf(item)
            Carrito.splice(indice, 1)
            
            // actualizarCarrito()
            console.log(Carrito)
        })
    })
}
// actualizarCarrito =()=>{
//     const cardEnElCarrito = document.querySelectorAll('.cardEnElCarrito')
//     cardEnElCarrito.innerHTML = ``
// }
const precioDelCarrito = document.querySelectorAll('.precioDeCompra')

const showImg = document.querySelectorAll('img')

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

const guardarDatos = () =>
{
    localStorage.setItem('suCompra', JSON.stringify(Carrito)) ? Carrito = JSON.parse(localStorage.getItem(Carrito)) : Carrito 
    carritoProducto()
    // productoElegido()
}
        const fotoMuestra = (imagen) =>{
        const imagenDato = imagen.target 
            Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: imagenDato,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            })
        console.log(imagenDato)
    }
    showImg.forEach((foto)=>{
        foto.addEventListener ('click', fotoMuestra)

        })
        
    const valorCarrito = () =>{
        let valorCarrito = 0
        for(const producto of Carrito){
            valorCarrito += producto.precio
        }
        return valorCarrito
    }
    
    // agregando un storage de las compras 

    
    // EventListeners
    

// Ejecuciones


// aplicacion de liseners 

    
    