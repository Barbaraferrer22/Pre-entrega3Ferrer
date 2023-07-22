const productosAlCarrito = document.querySelector("span#productosEnCarrito");
const container = document.querySelector("div.containerCard");
const inputSearch = document.querySelector("input#inputSearch");

function mostrarTotalProductos() {
  productosAlCarrito.textContent = carritoProtuctos.length;
}
carritoProtuctos.length > 0 && mostrarTotalProductos();

function retornarCardHTML(producto) {
  return ` 
<div class="cardPrincipal">
  <div class="card" style="width: 10rem">
  <img src="${producto.imagen}" 
    <div class="card-body ">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">  $ ${producto.importe}</p>
      <div class="comprar"><button class="button button-outline" id="${producto.id}">COMPRAR</button></div>
    </div>
  </div>
</div>
 `;
}

function activarClickEnBotones() {
  const botones = document.querySelectorAll("button.button.button-outline");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      let producto = arrayProductos.find(
        (producto) => producto.id === parseInt(boton.id)
      );
      carritoProtuctos.push(producto);
      localStorage.setItem(
        "CarritoProductos",
        JSON.stringify(carritoProtuctos)
      );
      mostrarTotalProductos();
    });
  });
}

function cargarProductos(array) {
  container.innerHTML = "";
  array.forEach((producto) => {
    container.innerHTML += retornarCardHTML(producto);
  });
  activarClickEnBotones();
}

cargarProductos(arrayProductos);

inputSearch.addEventListener("search", () => {
  localStorage.setItem("ultimaBusqueda", inputSearch.value);
  const resultado = arrayProductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  cargarProductos(resultado);
});
