import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeliveryProductRequest } from 'src/app/model/delivery-product-request';
import { DeliveryRequest } from 'src/app/model/delivery-request';
import { Product } from 'src/app/model/product';
import { DeliveryService } from 'src/app/service/delivery.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-delivery',
  template: `
  <app-header>></app-header>

  <div class="container-fluid" id="bannernc" style="padding: 50px;">
    <p class="titulo">Realiza tu pedido!</p>
  </div>

  <section class="vh-100" style="margin-bottom: 230px;">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="assets/img/queso.jpg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form #f="ngForm" (ngSubmit)="onSubmit()">

          <div class="form-outline mb-4">
            <input type="text" name="nameCustomer" id="nameCustomer" class="form-control form-control-lg" [(ngModel)] = "deliveryRequest.nameCustomer" required minlength="4">
            <label class="form-label" for="nameCustomer">Ingresa tu Nombre</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="addressCustomer" name="addressCustomer" class="form-control form-control-lg" [(ngModel)] = "deliveryRequest.addressCustomer"/>
            <label class="form-label" for="addressCustomer">Ingresa tu direccion</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="phoneCustomer" name="phoneCustomer" class="form-control form-control-lg"  [(ngModel)] = "deliveryRequest.phoneCustomer" />
            <label class="form-label" for="phoneCustomer">Ingresa tu telefono</label>
          </div>
          
          <div class="form-outline mb-4">
            <h3>Productos</h3>
          </div>

          <div class="form-outline mb-5">
            <select name="name" class="form-select form-control form-control-lg" aria-label="Default select example" [(ngModel)] = "productRequest.name">
              <option *ngFor="let product of products" [value]="product.name">{{product.name}}</option>
            </select>
            <br>
            <input type="text" id="quantity" name="quantity" class="form-control form-control-lg"  [(ngModel)] = "productRequest.quantity" />
            <label class="form-label" for="quantity">Ingresa la cantidad</label>
            <br>
            <a role="button" (click)="addProduct()" class="btn btn-outline btn-lg btn-block" style="background-color: #F9BE6B;">Añade otro producto</a>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-dark btn-lg btn-block">Realiza tu pedido!</button>

          <br>

          <div *ngIf="alertTrue;" class="alert alert-success mt-4 mb-5" role="alert">
            Pedido Enviado con exito
          </div>

          <div *ngIf="error;" class="alert alert-danger mt-4 mb-5" role="alert">
            Tienes algun error en tus datos, revisa que no haya campos vacios
          </div>

        </form>
      </div>
    </div>
  </div>
</section>

  <app-footer></app-footer>
  `,
  styles: [
    `
    #bannernc{
  background-image: url("/assets/img/banner-de-verde-bosque-verano-naturaleza-fondo-207273923.jpg");
  background-color: rgb(48, 48, 48);
  background-blend-mode: soft-light;
}

    #add{
      background-color: #F9BE6B;
      color: black;
    }

.titulo{
  text-align: center;
  font-size: 100px;
  color: white;
}

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}

@media only screen and (max-width: 480px) {
img {
display: none;
}

div p {
font-size: 50px;
}

#bannernc{
padding: 0px;
}
}
  `
  ]
})
export class CreateDeliveryComponent implements OnInit {
  
  alertTrue = false;

  products: Product[] = [];

  productRequest: DeliveryProductRequest = new DeliveryProductRequest("", 0);


  deliveryRequest: DeliveryRequest = new DeliveryRequest("", "", "", []);
  deliveryProductRequest: DeliveryProductRequest[] = [];

  nameCustomerValidator: boolean = false;
  addressValidator: boolean = false;
  phoneValidator: boolean = false;
  quantityValidator: boolean = false;
  error: boolean = false;

  constructor(private productService: ProductService, private changeDetector: ChangeDetectorRef, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.obtainProducts();
  }

  private obtainProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.changeDetector.detectChanges();
    });
  }

  addProduct(){
    this.deliveryProductRequest.push(this.productRequest);
    console.log(this.deliveryProductRequest);
    this.quantityValidator = this.productRequest.quantity > 0;
    if(!this.quantityValidator){
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      throw new Error("Error en los datos");
    }
    this.productRequest = new DeliveryProductRequest("", 0);
  }

  onSubmit(){

    this.deliveryRequest.deliveryProductName = this.deliveryProductRequest;


    this.nameCustomerValidator = this.deliveryRequest.nameCustomer.length > 4;
    this.addressValidator = this.deliveryRequest.addressCustomer.length > 4;
    this.phoneValidator = this.deliveryRequest.phoneCustomer.length > 6;

    if(this.nameCustomerValidator && this.addressValidator && this.phoneValidator){
      console.log(this.deliveryRequest);
      this.deliveryService.saveDelivery(this.deliveryRequest).subscribe(data => {
        this.error = false;
        this.alertTrue = true;
      });


    }else{
      console.log(this.deliveryRequest);
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      throw new Error("Error en los datos");
    }
  }

}
