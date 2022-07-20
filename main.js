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
    }else if (nombre.length = 0){
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