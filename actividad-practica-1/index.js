const ProductManger = require("./ProuductManager.js");

const manager = new ProductManger();

// console.log(manager);
// console.log(manager.getProducts());

const product1 = {
  title: "Rayuela",
  description: "Libro de Cortazar",
  stock: 15,
  price: 2.44,
  thumbnail: "NOT_FOUND",
  code: "AO1"
}

const descriptionProduct1 = product1.description
console.log({descriptionProduct1})

const product2 = {
  title: "El Principito",
  description: "Libro de Saint Perez",
  stock: 500,
  price: 1.4,
  thumbnail: "NOT_FOUND",
  code: "AO2"
}

manager.addProduct(product1)
manager.addProduct(product2)

// console.log(manager.getProducts());

// console.log(manager.getProductById(2))
// console.log(manager.getProductById("asdf"));

