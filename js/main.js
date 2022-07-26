//Calculamos el IVA con la funcion
/* const iva = x => x*0.21;
let precioConIva = (iva(precio) + precio);

//Imprimimos el precio para el consumidor final
alert(`El precio unitario final del producto con IVA es $${precioConIva}.`);

//Imprimimos el valor total de los productos ingresados
const patrimonioNeto = (precioConIva * cantidades);
alert(`El patrimonio total de ${nombre} ingresado es $${patrimonioNeto}.`) */

// --------------------------------------------------------------------------------------------- //

class ProductoNuevo {
    constructor(nombre, precio, cantidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidades = cantidades;
    }
}

let listaProductos = [];

const guardaProd = () => {
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let cantidades = document.getElementById("cantidades").value;
    let nuevoProd = new Producto(nombre, precio, cantidades);
    listaProductos.push(nuevoProd);
    return nuevoProd;
}

function printProd() {
    listaProductos.forEach((prod) => {
        let prodCargado = document.createElement("div");
        prodCargado.innerHTML = `<h4>${prod.nombre}`
        contProd.append(prodCargado);
        return prodCargado;
    })
}

/* // Eventos
document.getElementById("contenedorForm").addEventListener("submit", function() {
    const name = 
})  */