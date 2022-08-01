// lo que voy a hacer es empezar a crear objetos paraa luego crear y especificar cada zapatillas de manera mas eficiente. 
// por el momento no se que tipo de bucle voy a crear para que haga no se que cosa... estoy un poco jodido porqueno se que es lo que hare jajaj

// voy a hacer una copia de la pagina elclubdelsweater es linda y tinen buenos precios. Me caen bien.

class Productos {
    constructor(id, nombre, talle, color, precio,){
        this.id = id;
        this.nombre = nombre;
        this. talle = talle;
        this.color = color;
        this. precio = precio;
    }
}
const p1 = new Productos(01, 'remera manga larga mil pintas', ['s, m, l,'], 'gray', 1950)
const p2 = new Productos(02, 'remera manga larga textura', ['s, m, l,'], 'black', 1950)
const p3 = new Productos(03, 'remera manga larga', ['s, m, l,'], 'white', 1950)
const p4 = new Productos(04, 'sweater Diesel', ['s, m, l,'], 'gray', 5850)

const Remera = [p1, p2, p3]
const Sweater = [p4]

let Carrito = []
function eleccion (){

let bienvenido = prompt('remera o sweater, ¿que te interesa ver?').toLowerCase()
switch (bienvenido) {
    case 'remera':
        let elejiremera = prompt('estas son las remeras disponibles: milPintas, textura, white')
        
        switch (elejiremera) {
            case 'milPintas':
                prompt('¿que talle buscabas, ' + p1.talle + ' ?')
                Carrito.push(p1)
                break;
        
            case 'textura':
                prompt('¿que talle buscabas, ' + p2.talle + ' ?')
                Carrito.push(p2)
                break;
        
            case 'white':
                prompt('¿que talle buscabas, ' + p3.talle + ' ?')
                Carrito.push(p3)
                break;
        
            default:
                alert('el articulo ingresado no se encuentra en stock')
                break;
        }
        break;

    case 'sweater':
        prompt('¿que talle buscabas, ' + p4.talle + ' ?')
        Carrito.push(p4)
        break;

    default:
        alert('el articulo ingresado no se encuentra en stock')
        break;
}
if (confirm('desea seguir comprando?')){
    eleccion()
}
}

eleccion()

console.log(Carrito)




const valorCarrito = () =>{
    let valorCarrito = 0
    for(const producto of Carrito){
        valorCarrito += producto.precio
    }
    return valorCarrito
}
alert('gracias por su compra su total es de $' + valorCarrito())


// Mauro, como estas? todavia me cuesta muchisimo imginar una respuesta a los problemas que me aparecen con los conocimientos que tengo. no se que hacer para tener mas idea de como deberia resolver las situaciones que se me presentan en el codigo. 