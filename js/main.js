// FETCH (World Time API)

/* const reloj = document.getElementById('reloj'); */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7812a65835mshb020231a7307c1cp1d6384jsn3ec67c303211',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
};

fetch('https://world-time2.p.rapidapi.com/ip', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);        
        document.getElementById('reloj').innerHTML = `<p>Es la hora <strong>${response.datetime}</strong>.</p>`;
    })
	.catch(err => console.error(err));

// VARIABLES

const app = document.getElementById('app');
app.style.display = 'none';
const inicioSesion = document.getElementById('welcomeUser');
const popupLogIn = document.getElementById('myModal')
const nombreUsuario = document.getElementById('nombreUsuario').value;
const passwordUsuario = document.getElementById('passwordUsuario').value;
let username;

// LOGUEO

/* const imprimirSaludo = () => {
    saludoUsuario.innerHTML = `Bienvenido ${username}`;
    inicioSesion.style.display = 'none';
}

const ejecutarFormulario = () => {
    username = nombreUsuario.value;
}

popupLogIn.addEventListener('submit', (e) => {
    e.preventDefault();
}) */


/* document.getElementById("logIn").addEventListener("submit", function(e)){
    Swal.fire(
        'Sesión iniciada con éxito',
        '',
        'success'
    )
    e.preventDefault();
}

function login(e){
    e.preventDefault();
    if (nombreUsuario == "coder" && passwordUsuario == "1234"){
        app.style.display = "initial";
        ventanaLogIn.style.display = "none";
    }
} */

// CONTADOR DE PRODUCTOS

/* let cantidadProductos = 0; */

// CLASES

/* class Product{
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
            <div class="card text-center">
                <div>
                    <strong>PRODUCTO</strong>: ${product.nombre}
                    <strong>PRECIO</strong>: $${product.precio}
                    <strong>CANTIDADES</strong>: ${product.cantidades}
                    <a href="#" class="btn btn-danger m-1" name="delete">BORRAR</a>
                </div>
            </div>
            <div class="contadorProductos col text-center mt-1 mb-3">
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
 */
// EVENTOS

/* document.getElementById("product-form").addEventListener("submit", function(disableRefresh){
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
}) */

/* FORMULA QUE VOY A USAR EN EL FUTURO
    const iva = x => x*0.21;
    let precioConIva = (iva(precio) + precio); */