export default class ProductManager {
  constructor() {
    this.products = []
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {

    if(!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Missing labels") 
      return
    }

    if(this.products.find(pr => pr.code === code)) {
      console.error("Code already in use") 
      return
    }

    let id;
    id = (!this.products.length && 1) || this.products[this.products.length - 1].id + 1

    this.products.push({
      title, 
      description, 
      price, 
      thumbnail, 
      code, 
      stock, 
      id
    })

    console.log("Product added successfully!")
  }

  getProducts() {
    return this.products;
  }

  getProductById(pid) {
    const product = this.products.find(pr => pr.id === pid);
    return product ?? console.error("Product with id " + pid + " not exists")
  }
}
