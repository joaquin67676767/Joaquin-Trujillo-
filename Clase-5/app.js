/* 
  =======================================================
  🚀 CLASE 05: ASINCRONISMO, HTTP Y FETCH (7° 5ta)
  =======================================================
  Completen los ejercicios en este archivo.
  Abran la consola del navegador (F12) para ver los resultados.
*/

// =======================================================
// 🟢 BLOQUE 1: Desmontando el Flujo en Consola
// =======================================================

// Ejercicio 1: El Misterio de la Promesa Pendiente
function probarFetchSinAwait() {
  // TODO: Hacé un fetch() directo a 'https://jsonplaceholder.typicode.com/todos/1' e imprimí el resultado sin await.
  const resultado = fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log("resultado directo:", resultado);
}
probarFetchSinAwait();


// Ejercicio 2: Inspeccionando el Sobre HTTP (Response)
async function inspeccionarSobreHTTP() {
  // TODO: Usá el primer await fetch(), e imprimí el objeto response, response.status y response.ok.
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('response completo', response);
  console.log('response status', response.status);
  console.log('response ok', response.ok);  

}
inspeccionarSobreHTTP();


// Ejercicio 3: Desempaquetando los Datos con .json()
async function extraerDatosJSON() {
  // TODO: Usá el segundo await response.json() e imprimí únicamente la propiedad data.title.
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('desempaquetado', data);
  console.log('titulo de la tarea', data.title);

}
extraerDatosJSON();


// =======================================================
// 🟡 BLOQUE 2: Consumiendo APIs Reales y Mostrando en el DOM
// =======================================================

// Ejercicio 4: Mi Primer Renderizado Dinámico
const btnCargar = document.getElementById('btnCargar');
const tituloTarea = document.getElementById('tituloTarea');

btnCargar.addEventListener('click', async () => {
  // TODO: Cargar la tarea /todos/1 y mostrar su título dentro de tituloTarea.textContent
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  tituloTarea.textContent = data.title;
});


// Ejercicio 5: Recorriendo un Array de Usuarios
const listaUsuarios = document.getElementById('listaUsuarios');

async function cargarUsuarios() {
  // TODO: Cargar /users, recorrer el array con .forEach() e inyectar <li> en listaUsuarios.
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await response.json();
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textcontent = `${usuario.name} - ${usuario.email}`;
    listausuarios.append(li)
}
cargarUsuarios();


// Ejercicio 6: Control de Errores con response.ok
const mensajeError = document.getElementById('mensajeError');

async function probarEndpointInvalido() {
  // TODO: Consultar una URL rota dentro de un try/catch, verificar if(!response.ok) y mostrar error en el DOM.
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/endpoint-invalido');
    if(!response.ok) {
      throw new error ("recurso no encontrado (HTTP 404)");
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error){
    mensajeError.textcontent = error.message;
  }
}
probarEndpointInvalido();


// =======================================================
// 🔵 BLOQUE 3: Recursos Locales y Parámetros
// =======================================================

// Ejercicio 7: Consumiendo un recurso JSON local
async function cargarRecursoLocal() {
  // TODO: Hacer fetch('./productos.json'), convertir a .json() e imprimir la lista en consola.
  const response = await fetch('./productos.json');
  const productos = await response.json();
  console.log('productos locales:', productos);
}
cargarRecursoLocal();


// Ejercicio 8: Búsqueda dinámica con parámetros (Profundización)
const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', async () => {
  // TODO: Leer inputBuscar.value, hacer fetch a 'https://dummyjson.com/products/search?q=TEXTO' e imprimir resultados.
  const texto = inputBuscar.value;
  const response = await fetch(`https://dummyjson.com/products/search?q=${texto}`);
  const data = await response.json();
  console.log('resultados de la busqueda:', data);
});


// =======================================================
// 🔴 BLOQUE 4: Desafíos Integradores
// =======================================================

// Ejercicio 9: Catálogo de Productos con Estado de Carga
const btnCatalogo = document.getElementById('btnCatalogo');
const catalogo = document.getElementById('catalogo');

btnCatalogo.addEventListener('click', async () => {
  // TODO: 1. Poner catalogo.innerHTML = "⏳ Cargando productos del servidor..."
  // TODO: 2. Hacer fetch a 'https://dummyjson.com/products'
  // TODO: 3. Reemplazar el contenedor con cards simples (imagen, título, precio) por cada producto.
  catalogo.innerHTML = "⏳ Cargando productos del servidor...";
  try {
  const response = await fetch('https://dummyjson.com/products');

  if(!response.ok){
    throw new error(`error del servidor: ${response.status}`);
  }
  const data = await response.json();
  const productos = data.productos;
  catalogo.innerHTML = productos.map(producto => `
    <div class="card">
      <img src="${producto.thumbnail}" alt="${producto.title}">
      <h3>${producto.title}</h3>
      <p>$${producto.price.toFixed(2)}</p>
    </div>
  `).join('') ;
}
catch (error) {
  catalogo.innerHTML = `<p class="error"> no se pudo cargar el catalogo: ${error.message}</p>`;
}

});


// Ejercicio 10: La Explicación del Modelo Mental (Cierre)
/*
  Botón -> el usuario toca el botón en la pantalla.

  Evento click -> JS detecta ese toque gracias al addEventListener.

  fetch() -> manda el pedido de datos hacia el servidor.

  Promise -> mientras el pedido viaja, fetch() nos devuelve que todavía
  no tiene los datos, solo indica que está en camino.

  HTTP Request -> el pedido efectivamente sale viajando por internet hacia el servidor.

  API / Endpoint -> el servidor recibe el pedido en una "ventanilla" específica
  preparada para atender ese tipo de solicitud.

  HTTP Response -> el servidor arma la respuesta con el resultado y un código de estado.

  Response -> en nuestro código recibimos ese "sobre" con la respuesta,
  pero todavía no son los datos, son solo (status, ok, etc).

  response.json() -> le pedimos al sobre que nos entregue el contenido real,
  convirtiendo el texto recibido en un objeto/array de JS.

  Promise -> como leer el contenido también toma un instante, de nuevo
  se devuelve un "ticket" hasta que esté listo.

  Objeto / Array de JavaScript -> ahora sí tenemos los datos utilizables en nuestro código.

  Procesamiento JS -> transformamos esos datos (por ejemplo armando el HTML de cada tarjeta).

  DOM -> insertamos ese HTML dentro de la estructura de la página en memoria.

  Pantalla -> el usuario finalmente ve el resultado actualizado en su celular.
*/