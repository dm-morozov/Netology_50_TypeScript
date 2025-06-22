interface Product {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    {
        id: 1,
        title: "Яблоко",
        price: 104,
        inStock: true,
    },
    {
        id: 2,
        title: "Груша",
        price: 204,
        inStock: false,
    },
    {
        id: 3,
        title: "Помидор",
        price: 159,
        inStock: true,
    },
]

function getAvailableProducts(products: Product[]): Product[] {
    let productsInStock: Product[] = [];

    if (products.length === 0 {
        throw new Error("Список товаров пуст");
    };

    for (const product of products) {
        if(product.inStock) {
            productsInStock.push(product);
        }
    }

    return productsInStock;
}

function getTotalPrice(products: Product[]): number {
    let totalPrice: number = 0;

    if (products.length === 0) {
        throw new Error("Список товаров пуст");
    };

    for (const product of products) {
        totalPrice += product.price;
    }

    return totalPrice;
}

console.log(getAvailableProducts(products));
console.log("Общая цена всех товаров:", getTotalPrice(products));