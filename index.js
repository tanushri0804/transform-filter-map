const processProducts = (products) => {
    const productNames = products.map(product => product.name);

    products.forEach(product => {
        const message = `${product.name} is ${product.price > 50 ? 'above' : 'below'} $50`;
        console.log(message);
    });

    return productNames; 
};

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

const names = processProducts(products);
console.log("Product Names:", names);
