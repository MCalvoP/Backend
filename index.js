class ProductManager {
    constructor() {
        this.products = []
    }
    addProduct(product){
        if (!product.title || product.title === ""){
            return console.error("Faltan datos")
        }
        if (!product.description || product.description === ""){
            return console.error("Faltan datos")
        }
        if (!product.price || product.price === ""){
            return console.error("Faltan datos")
        }
        if (!product.code || product.code === ""){
            return console.error("Faltan datos")
        }
        if (!product.stock || product.stock === ""){
            return console.error("Faltan datos")
        }
        if(this.products.find(producto => producto.code == product.code)){
            return "Producto existente"
        } else{
            this.products.push(product)
        }
    }
    getProducts() {
        return this.products
    }

    getProductById(id){
        const product = this.products.find(producto => producto.id == id)

        if(product) {
            return product
        }
        return "Not found"
    }
    
}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }
    static incrementID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else{
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Arroz", "Arroz", 200, "", "A01", 10)
const product2 = new Product("Fideos", "Fideos", 200, "", "F01", 15)
const product3 = new Product("Pollo", "Pollo", 350, "", "P01", 8)
const product4 = new Product("Carne", "Carne", 400, "", "C01", 6)
const product5 = new Product()

const productManager = new ProductManager()
productManager.addProduct(product1)
productManager.addProduct(product4)
console.log(productManager.addProduct(product1))
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(5))
console.log(productManager.getProducts())