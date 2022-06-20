import { DeliveryProductRequest } from "./delivery-product-request";

export class DeliveryRequest {
    nameCustomer: string;
    addressCustomer: string;
    phoneCustomer: string;
    deliveryProductName: DeliveryProductRequest[];

    constructor(nameCustomer: string, adressCustomer: string, phoneCustomer: string, deliveryProducts: DeliveryProductRequest[]) {
        this.nameCustomer = nameCustomer;
        this.addressCustomer = adressCustomer;
        this.phoneCustomer = phoneCustomer;
        this.deliveryProductName = deliveryProducts;
    }
}
