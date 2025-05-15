document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const hamburgerMenu = document.getElementById("hamburger-menu")
  const mobileNav = document.getElementById("mobile-nav")
  const categoryToggle = document.querySelector(".mobile-category-toggle")
  const categoryDropdown = document.querySelector(".mobile-category-dropdown")
  const categoryItems = document.querySelectorAll(".mobile-category-item")
  const currentCategory = document.getElementById("current-category")

  // Botones de categoría del menú lateral
  const botonesCategorias = document.querySelectorAll(".boton-categoria")

  // Menú hamburguesa
  if (hamburgerMenu && mobileNav) {
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active")
      mobileNav.classList.toggle("active")
      document.body.classList.toggle("menu-active")
    })
  }

  // Menú desplegable de categorías
  if (categoryToggle && categoryDropdown) {
    categoryToggle.addEventListener("click", () => {
      categoryToggle.classList.toggle("active")
      categoryDropdown.classList.toggle("show")
    })

    // Cerrar el menú desplegable al hacer clic fuera de él
    document.addEventListener("click", (event) => {
      if (!categoryToggle.contains(event.target) && !categoryDropdown.contains(event.target)) {
        categoryToggle.classList.remove("active")
        categoryDropdown.classList.remove("show")
      }
    })
  }

  // Manejo de selección de categorías en el menú móvil
  categoryItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Actualizar estado activo en el menú móvil
      categoryItems.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Actualizar el texto del botón de categoría
      currentCategory.textContent = this.textContent

      // Cerrar el menú desplegable
      categoryToggle.classList.remove("active")
      categoryDropdown.classList.remove("show")

      // Obtener la categoría seleccionada
      const categoryId = this.getAttribute("data-category")

      // Simular clic en el botón correspondiente del menú lateral
      const botonCategoria = document.getElementById(categoryId)
      if (botonCategoria) {
        botonCategoria.click()
      }
    })
  })

  // Sincronizar los botones de categoría del menú lateral con el menú móvil
  botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", function () {
      const categoryId = this.id

      // Actualizar el menú móvil
      categoryItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("data-category") === categoryId) {
          item.classList.add("active")
          currentCategory.textContent = item.textContent
        }
      })
    })
  })

  // Menú lateral móvil existente
  const openMenu = document.querySelector("#open-menu")
  const closeMenu = document.querySelector("#close-menu")
  const aside = document.querySelector("aside")

  if (openMenu && closeMenu && aside) {
    openMenu.addEventListener("click", () => {
      aside.classList.add("aside-visible")
    })

    closeMenu.addEventListener("click", () => {
      aside.classList.remove("aside-visible")
    })

    // Cerrar el menú lateral al seleccionar una categoría en móviles
    botonesCategorias.forEach((boton) => {
      boton.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
          aside.classList.remove("aside-visible")
        }
      })
    })
  }
})
