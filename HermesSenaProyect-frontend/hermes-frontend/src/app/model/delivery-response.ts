import { DeliveryProductResponse } from "./delivery-product-response";

export class DeliveryResponse {
    id: number;
    nameCustomer: string;
    addressCustomer: string;
    phoneCustomer: string;
    deliveryProduct: DeliveryProductResponse[];
    dateOfDelivery: string;
    totalOfAll: number;
    status: boolean;

    constructor(id: number, nameCustomer: string, addressCustomer: string, phoneCustomer: string, deliveryProduct: DeliveryProductResponse[], dateOfDelivery: string, totalOfAll: number, status: boolean) {
        this.id = id;
        this.nameCustomer = nameCustomer;
        this.addressCustomer = addressCustomer;
        this.phoneCustomer = phoneCustomer;
        this.deliveryProduct = deliveryProduct;
        this.dateOfDelivery = dateOfDelivery;
        this.totalOfAll = totalOfAll;
        this.status = status;
    }
}
