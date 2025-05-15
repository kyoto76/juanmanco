// Productos
const productos = [
  // Netflix
  {
    id: "netflix-01",
    titulo: "Netflix Premium",
    imagen: "image/netflixlogo.webp",
    categoria: {
      nombre: "Netflix",
      id: "netflix",
    },
    precio: "14.000",
  },
  // Spotify
  {
    id: "spotify-01",
    titulo: "Spotify 1 MES",
    imagen: "image/spotifylogo.webp",
    categoria: {
      nombre: "Spotify",
      id: "spotify",
    },
    precio: "12.000",
  },
  {
    id: "spotify-02",
    titulo: "Spotify 3 MESES",
    imagen: "image/spotifylogo.webp",
    categoria: {
      nombre: "Spotify",
      id: "spotify",
    },
    precio: "28.000",
  },
  // Disney
  {
    id: "disney-01",
    titulo: "Disney+ Premium",
    imagen: "image/dinseylogo.webp",
    categoria: {
      nombre: "Disney",
      id: "disney",
    },
    precio: "12.000",
  },
  // MAX
  {
    id: "max-01",
    titulo: "MAX Platino",
    imagen: "image/max.webp",
    categoria: {
      nombre: "MAX",
      id: "max",
    },
    precio: "12.000",
  },

  // Crunchyroll
  {
    id: "crunchyroll-01",
    titulo: "Crunchyroll Premium",
    imagen: "image/Crunchyrolllogo.webp",
    categoria: {
      nombre: "Crunchyroll",
      id: "crunchyroll",
    },
    precio: "10.000",
  },

  // MAS
  //chat gpt
  {
    id: "chatgpt-01",
    titulo: "CHAT GPT",
    imagen: "image/chatgpt.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "30.000",
  },
  {
    id: "chatgpt-02",
    titulo: "IPTV 1 DISPOSITIVO",
    imagen: "image/iptv.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "13.000",
  },
  // Apps para Editar
  {
    id: "chatgpt-03",
    titulo: "CANVA 45 DIAS",
    imagen: "image/canva.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "12.000",
  },

  {
    id: "chatgpt-04",
    titulo: "CANVA 1 AÑO",
    imagen: "image/canva.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "30.000",
  },
  //VIX
  {
    id: "chatgpt-05",
    titulo: "VIX",
    imagen: "image/vix.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "10.000",
  },
  //amazon prime
  {
    id: "chatgpt-06",
    titulo: "AMAZON PRIME",
    imagen: "image/amazon.webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "12.000",
  },
  //PARAMOUNT
  {
    id: "chatgpt-07",
    titulo: "PARAMOUNT",
    imagen: "image/parm (1).webp",
    categoria: {
      nombre: "MAS",
      id: "chatgpt",
    },
    precio: "10.000",
  },

  // YouTube Premium 1 Mes
  {
    id: "youtube-01",
    titulo: "YouTube Premium 1 MES",
    imagen: "image/youtube.webp",
    categoria: {
      nombre: "YouTube",
      id: "youtube",
    },
    precio: "12.000",
  },
  // YouTube Premium 3 Meses
  {
    id: "youtube-02",
    titulo: "YouTube Premium 3 MESES",
    imagen: "image/youtube.webp",
    categoria: {
      nombre: "YouTube",
      id: "youtube",
    },
    precio: "28.000",
  },
  //universal
    {
    id: "chatgpt-07",
    titulo: "Universal",
    imagen: "image/universal.webp",
    categoria: {
      nombre: "Universal",
      id: "chatgpt",
    },
    precio: "10.000",
  },
  //directvv
     {
    id: "chatgpt-07",
    titulo: "Direc TV GO",
    imagen: "image/directv.webp",
    categoria: {
      nombre: "Direc TV GO",
      id: "chatgpt",
    },
    precio: "15.000",
  },
]

// Selección de elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")

// Función para cargar productos
function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = ""

  productosElegidos.forEach((producto) => {
    // Crear la tarjeta con el nuevo diseño
    const div = document.createElement("div")
    div.classList.add("card")

    // Contenido de la tarjeta
    div.innerHTML = `
        <div class="card-content">
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">COMPRAR</button>
        </div>
    `

    contenedorProductos.append(div)
  })

  actualizarBotonesComprar()
}

// Cargar todos los productos al inicio
cargarProductos(productos)

// Manejo de eventos para los botones de categoría
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"))
    e.currentTarget.classList.add("active")

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find((producto) => producto.categoria.id === e.currentTarget.id)
      tituloPrincipal.innerText = productoCategoria.categoria.nombre
      const productosBoton = productos.filter((producto) => producto.categoria.id === e.currentTarget.id)
      cargarProductos(productosBoton)
    } else {
      tituloPrincipal.innerText = "Todos los productos"
      cargarProductos(productos)
    }
  })
})

// Función para actualizar los botones de compra
function actualizarBotonesComprar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar")

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const idBoton = e.currentTarget.id
      const productoSeleccionado = productos.find((producto) => producto.id === idBoton)

      // Redirigir a la página de compra o a la sección deseada
      window.location.href = `https://wa.link/8gkqa2?id=${productoSeleccionado.id}`
    })
  })
}
