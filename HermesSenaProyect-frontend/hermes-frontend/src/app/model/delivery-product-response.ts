export class DeliveryProductResponse {
    name: string;
    price: number;
    quantity: number;
    total: number;

    constructor(name: string, price: number, quantity: number, total: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    }
}
