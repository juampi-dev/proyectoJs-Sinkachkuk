// VARIABLES - DOM

const inicioSesion = document.getElementById('bienvenida');
inicioSesion.style.display = 'run-in';

const modalForm = document.querySelector("#inicioSesion");

const app = document.querySelector("#application");
app.style.display = "none";

const contador = document.querySelector("#contadorProductos");

// LOG IN

function logIn() {
    const usuario = document.querySelector("#usuario").value;
    const password = document.querySelector("#password").value;
    if (usuario == "coder" && password === "1234" || usuario == "admin" && password === "1234") {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("password", password);
        app.style.display = "block";
        modalForm.style.display = "none";
        inicioSesion.style.display = "none";
        document.querySelector(".modal-backdrop").style.display = "none";
    }else{
        Swal.fire(
            'Ingrese un usuario y una contraseña válida',
            '',
            'error'
          )
    }
}

// APLICACIÓN
// CONTADOR DE PRODUCTOS CARGADOS EN STOCK

let cantidadProductos = 0;

// CLASES CONSTRUCTORAS (APP)

class Product{
    constructor(nombre, precio, cantidades){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidades = cantidades;
    }
}

class Interfaz{
    agregaProd(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center p-2 my-2">
                <div>
                    <strong>PRODUCTO</strong>: ${product.nombre}
                    <strong>PRECIO</strong>: $${product.precio}
                    <strong>CANTIDADES</strong>: ${product.cantidades}
                    <div id="horaProducto" class="m-3 text-center">Producto ingresado en: ${horaProducto}
                    </div>
                    <a href="#" class="btn btn-danger m-1" name="delete">BORRAR</a>
                </div>
            </div>`
        productList.appendChild(element);
        localStorage.setItem("producto", JSON.stringify(product));
        this.resetearForm();
    }

    resetearForm(){
        document.getElementById("product-form").reset();
    }
    elimProd(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove();
            Swal.fire(
                'Producto eliminado',
                '',
                'error'
              )
        }
    }
}

// EVENTOS (APP)

document.getElementById("product-form").addEventListener("submit", function(e){
    Swal.fire(
        'Producto agregado al stock',
        '',
        'success'
      )
    cantidadProductos++;
    contador.innerHTML = cantidadProductos;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidades = document.getElementById("cantidades").value;
    const product = new Product(nombre, precio, cantidades);
    const interfaz = new Interfaz();
    interfaz.agregaProd(product);
    e.preventDefault();
})

document.getElementById("product-list").addEventListener("click", function(e){
    const interfaz = new Interfaz;
    if (cantidadProductos == 0){}
    else{
        cantidadProductos --;
        contador.innerHTML = cantidadProductos;
    }
    interfaz.elimProd(e.target);
    localStorage.removeItem("producto");
})

// FETCH (World Time API)

const horaProducto = document.getElementById("horaProducto")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7812a65835mshb020231a7307c1cp1d6384jsn3ec67c303211',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
};

const api = fetch('https://world-time2.p.rapidapi.com/ip', options)
    .then(response => response.json())
    .then(response => {        
        document.getElementById('reloj').innerHTML = `<p><strong>${response.datetime}</strong></p>`;
    })
    .catch(err => console.error(err));

// IVA

/* const iva = x => x*0.21;
let precioConIva = (iva(producto.precio) + producto.precio);
console.log = precioConIva; */