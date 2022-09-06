// voy a hacer una copia de la pagina elclubdelsweater es linda y tinen buenos precios. Me caen bien.

// DECLARACIONES
let allProductos = []
let Carrito = []

fetch('../data/productos.json')
    .then((Response) => Response.json())
    .then((respuesta) =>{
        // console.log('response: ',respuesta)
        allProductos = respuesta
        loadProductos(respuesta)
        console.log(allProductos)
        guardarDatos()
    })
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
}
    
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
            
            `
            porcadaproducto.className = 'cardEnElCarrito'
            modal.append(porcadaproducto)
        })
    }

    const btnCompra = document.querySelectorAll('.btn')

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

const guardarDatos = () =>{
    localStorage.setItem('suCompra', JSON.stringify(Carrito)) ? Carrito = JSON.parse(localStorage.getItem(Carrito)) : Carrito 
carritoProducto()
productoElegido()

}
const productoElegido = (evento) =>{
    const productoDatos = evento.target.getAttribute('data-id')
    console.log(evento)
    const laSeleccion = allProductos.find((producto) => producto.id == productoDatos)
    console.log(productoElegido.evento)
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
        console.log(Carrito)
    }
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
        
    btnCompra.forEach((boton) =>{
        boton.addEventListener('click', productoElegido )
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


    // alert('gracias por su compra su total es de $' + valorCarrito())
    
    // alert('te mostrare por consola los productos')
    // Carrito.forEach(producto =>{
    //     console.log(producto)
    // })
    
    
