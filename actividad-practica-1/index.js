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
  code: "AO1",
};

const { description: description1 } = product1;

// console.log({ description1 });

const product2 = {
  title: "El Principito",
  description: "Libro de Saint Perez",
  stock: 500,
  price: 1.4,
  thumbnail: "NOT_FOUND",
  code: "AO2",
};

const { description: description2 } = product2;
// console.log({ description2 });

manager.addProduct(product1);
manager.addProduct(product2);

console.log(manager.getProducts());

// console.log(manager.getProductById(2))
// console.log(manager.getProductById("asdf"));


