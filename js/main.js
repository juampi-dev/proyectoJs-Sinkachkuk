/* FORMULA QUE VOY A USAR EN EL FUTURO
    const iva = x => x*0.21;
    let precioConIva = (iva(precio) + precio); */

// ARRAY CONTADOR DE PRODUCTOS

let cantidadProductos = 0;

// CLASES

class Product{
    constructor(nombre, precio, cantidades){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidades = cantidades;
    }
}

class Interfaz{
    agregaProd(product){
        cantidadProductos++;
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="cardStock card text-center mb-4">
                <div>
                    <strong>PRODUCTO</strong>: ${product.nombre}
                    <strong>PRECIO</strong>: $${product.precio}
                    <strong>CANTIDADES</strong>: ${product.cantidades}
                    <a href="#" class="btn btn-danger" name="delete">BORRAR</a>
                </div>
            </div>
            <div class="contadorProductos card text-center">
                <div>
                    <strong>TOTAL DE ARTÍCULOS INGRESADOS</strong>: ${cantidadProductos}
                </div>
            </div>`
        productList.appendChild(element);
        this.resetearForm();
    }

    resetearForm(){
        document.getElementById("product-form").reset();
    }
    elimProd(element){
        if(element.name === "delete"){
            cantidadProductos --;
            element.parentElement.parentElement.parentElement.remove();
            Swal.fire(
                'Producto eliminado',
                '',
                'error'
              )
        }
    }
}

// EVENTOS

document.getElementById("product-form").addEventListener("submit", function(disableRefresh){
    Swal.fire(
        'Producto agregado al stock',
        '',
        'success'
      )
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidades = document.getElementById("cantidades").value;
    const product = new Product(nombre, precio, cantidades);
    const interfaz = new Interfaz();
    interfaz.agregaProd(product);
    disableRefresh.preventDefault();
})

document.getElementById("product-list").addEventListener("click", function(e){
    const interfaz = new Interfaz;
    interfaz.elimProd(e.target)
})

