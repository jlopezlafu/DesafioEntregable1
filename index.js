class ProductManager {
    id = 1;
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        let checkCode = this.products.find((p) => p.code === product.code);
        if (checkCode) {
            return 'This code already exists';
        }
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            return 'Fields missing';
        }
        let newProduct = { ...product, id: this.id };
        this.products.push(newProduct);
        this.id++;
        return 'Product added';
    }

    getProducts() { return this.products; }

    getProductsById(id) {

        let found = this.products.find((p) => p.id === id);
        if (!found) {
            return 'Not found';
        }
        return found;

    }
}

const product = {
    title: 'remera',
    description: 'Remera Rosa',
    price: 3000,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-480-0.jpg',
    code: 'Abc123',
    stock: 200,

};
const product2 = {
    title: 'remera',
    description: 'Remera Azul',
    price: 3000,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-480-0.jpg',
    code: 'Abc124',
    stock: 200,

};
const productManager = new ProductManager();
console.log(productManager.addProduct(product));
console.log(productManager.addProduct(product2));
console.log(productManager.getProducts());