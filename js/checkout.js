const tableBody = document.querySelector("tbody");
const sectionProductos = document.querySelector("section");

function listarCarritoHTML(producto) {
  return `<tr>
  <th scope="row">${producto.id}</th>
  <td>${producto.nombre}</td>
  <td>$ ${producto.importe.toLocaleString()}</td>
  <td><button class="buttonEliminar" id="${producto.id}">❌</button></td>
</tr>`;
}

function eliminarProductoDelCarrito() {
  const botones = document.querySelectorAll("button.buttonEliminar");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      let producto = arrayProductos.find(
        (producto) => producto.id === parseInt(boton.id)
      );
      let index = carritoProductos.indexOf(producto);
      if (index !== -1) {
        carritoProductos.splice(index, 1);
        localStorage.setItem(
          "CarritoProductos",
          JSON.stringify(carritoProductos)
        );
        mostrarTotalProductos();
      }
    });
  });
}

function mostrarMensajeCV() {
  return `  <div class="error"><h3>El Carrito esta Vacio 🥀</h3></div>`;
}

function armarCarrito() {
  /*   carritoProtuctos.length = 0; */
  tableBody.innerHTML = "";
  carritoProtuctos.length > 0
    ? carritoProtuctos.forEach(
        (producto) => (tableBody.innerHTML += listarCarritoHTML(producto))
      )
    : (sectionProductos.innerHTML = mostrarMensajeCV());
}

armarCarrito();
