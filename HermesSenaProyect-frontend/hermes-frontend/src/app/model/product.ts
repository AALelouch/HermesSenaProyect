export class Product {
    name: string;
    quantityInInventory: number;
    price: number;

    constructor(name: string, quantityInInventory: number, price: number) {
        this.name = name;
        this.quantityInInventory = quantityInInventory;
        this.price = price;
    }
}
