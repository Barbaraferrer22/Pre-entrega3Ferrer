const arrayProductos = [
  {
    id: 1256,
    imagen: "image/Girasol.jpg",
    nombre: "GIRASOL",
    importe: 2500,
    categoria: "Flor",
  },
  {
    id: 2855,
    imagen: "image/tulipan.jpg",
    nombre: "TULIPAN",
    importe: 5000,
    categoria: "Flor",
  },
  {
    id: 1256,
    imagen: "image/rosa.jpg",
    nombre: "ROSA",
    importe: 6500,
    categoria: "Flor",
  },
  {
    id: 4585,
    imagen: "image/margarita.jpg",
    nombre: "MARGARITA",
    importe: 3500,
    categoria: "Flor",
  },
  {
    id: 7896,
    imagen: "image/ramoDeFlores.jpg",
    nombre: "RAMILLETE",
    importe: 10000,
    categoria: "Arreglo",
  },
  {
    id: 5248,
    imagen: "image/cactusSanPedro.jpeg",
    nombre: "SAN PEDRO",
    importe: 15000,
    categoria: "Cactus",
  },
  {
    id: 7489,
    imagen: "image/pinoCipres.jpg",
    nombre: "CIPRES",
    importe: 25000,
    categoria: "Arbol",
  },
  {
    id: 4101,
    imagen: "image/palmera.jpeg",
    nombre: "PALMERA",
    importe: 80000,
    categoria: "Arbol",
  },
];

const carritoProtuctos =
  JSON.parse(localStorage.getItem("CarritoProductos")) || [];

/* function recuperarCArrito() {
  JSON.parse(localStorage.getItem("CarritoProductos")) || [];

    if (localStorage.getItem("CarritoProductos") !== null) {
    return JSON.parse(localStorage.getItem("CarritoProductos"));
  } else {
    return [];
  }
} */
