class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    let productByCode = this.products.some((p) => p.code === product.code);

    if (productByCode) {
      console.log("El producto ya existe");

      return;
    }

    let newProduct = {
      id: this.products[this.products.length - 1]?.id + 1 || 1,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
    };

    this.products.push(newProduct);
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {
    let productFound;

    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id === id) {
        productFound = this.products[i]
      } 
    }

    if(!productFound) return console.log("Producto no encontrado");
    return productFound
  }
}

module.exports = ProductManager
