// SIMULADOR DE IVA Y PATRIMONIOS TOTALES
// Trabajaremos con 3 parametros principales, nombre del producto, precio (sin IVA, ya que creamos una funcion flecha para calcularlo) y cantidades.

//Ingresamos el producto

let nombre = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio unitario del producto:"));
let cantidades = parseInt(prompt("Ingrese las cantidades del producto:"))

//Guardamos el producto en un array
let producto = [nombre, precio, cantidades];
    if (cantidades <= 0){
        alert("Las cantidades ingresadas son invalidas. Por favor, vuelva a intentarlo mas tarde.");   
    }else if (nombre.length == 0){
        alert("El nombre ingresado es invalido. Por favor, vuelva a intentarlo mas tarde.");
    }else{
        alert(`El producto ingresado es ${nombre}, cuesta $${precio} (precio unitario sin IVA), y hay ${cantidades} productos disponibles en stock.`);
    }

//Calculamos el IVA con la funcion
const iva = x => x*0.21;
let precioConIva = (iva(precio) + precio);

//Imprimimos el precio para el consumidor final
alert(`El precio unitario final del producto con IVA es $${precioConIva}.`);

//Imprimimos el valor total de los productos ingresados
const patrimonioNeto = (precioConIva * cantidades);
alert(`El patrimonio total de ${nombre} ingresado es $${patrimonioNeto}.`)

//Ingresamos otros productos en una array para calcular el IVA con un forEach

let stockProductos = [
    {nombre: "mesas", precio: 500, cantidades: 30},
    {nombre: "sillas", precio: 250, cantidades: 52},
    {nombre: "almohadones", precio: 85, cantidades: 18},
    {nombre: "cajoneras", precio: 1100, cantidades: 9},
]

stockProductos.forEach(productoEnlistado => {
    let precioConIvaEnlistado = (productoEnlistado.precio + iva(productoEnlistado.precio));
    alert(`Tenemos los siguientes productos ya guardados en stock: ${productoEnlistado.nombre}, y su precio sin IVA es ${productoEnlistado.precio}, y contamos con ${productoEnlistado.cantidades} unidades.`);
    alert(`El precio unitario final de ${productoEnlistado.nombre} es ${precioConIvaEnlistado}`);

})