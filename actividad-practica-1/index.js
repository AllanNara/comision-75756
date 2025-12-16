import ProductManager from "./ProductManager.js";

const manager = new ProductManager();


manager.addProduct({
  title: "Cronicas de una muerte anunciada",
  price: 13.3,
  code: "00A1",
  stock: 22,
  thumbnail: "IMG_NOT_FOUND"
})

manager.addProduct({
  title: "Cronicas de una muerte anunciada",
  description: "Libro de Gabriel Garcia Marquez",
  price: 13.3,
  code: "00A1",
  stock: 22,
  thumbnail: "IMG_NOT_FOUND"
})

manager.addProduct({
  title: "Cronicas de una muerte anunciada",
  description: "Libro de Gabriel Garcia Marquez",
  price: 13.3,
  code: "00A1",
  stock: 22,
  thumbnail: "IMG_NOT_FOUND"
})

manager.addProduct({
  title: "Dracula",
  description: "Libro de Bream Stoker",
  price: 20,
  code: "00A2",
  stock: 23,
  thumbnail: "IMG_NOT_FOUND"
})

manager.addProduct({
  title: "El Resplandor",
  description: "Libro de Stephen King",
  price: 11,
  code: "00A3",
  stock: 1,
  thumbnail: "IMG_NOT_FOUND"
})

console.log("todo")
console.log(manager.getProducts())

console.log("por id")
console.log(manager.getProductById(2))
