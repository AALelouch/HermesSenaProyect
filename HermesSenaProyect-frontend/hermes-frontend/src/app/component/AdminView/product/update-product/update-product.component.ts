import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  template: `
  <app-header-admin></app-header-admin>

  <div class="container-fluid" id="bannernc" style="padding: 50px;">
    <p class="titulo">Edita un producto!</p>
  </div>

  <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="assets/img/queso.jpg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form #f="ngForm" (ngSubmit)="onSubmit()">

          <div class="form-outline mb-4">
            <input type="text" name="name" id="name" class="form-control form-control-lg" [(ngModel)] = "product.name">
            <label class="form-label" for="name">Nombre</label>
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="quantityInInventory" name="quantityInInventory" class="form-control form-control-lg" [(ngModel)] = "product.quantityInInventory"/>
            <label class="form-label" for="quantityInInventory">Cantidad en inventario</label>
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="price" name="price" class="form-control form-control-lg"  [(ngModel)] = "product.price" />
            <label class="form-label" for="price">Precio</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-dark btn-lg btn-block">Edita!</button>


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
export class UpdateProductComponent implements OnInit {

  product: Product = new Product("", 0, 0);
  name: string = "";

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.productService.getByIdProduct(this.name).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.name, this.product).subscribe(
      (data) => {
        setTimeout(() => {console.log(this.product);}, 3000);
            //this.router.navigate(['/products']);
      });
  }

  onSubmit(){
    this.updateProduct();
  }

}
