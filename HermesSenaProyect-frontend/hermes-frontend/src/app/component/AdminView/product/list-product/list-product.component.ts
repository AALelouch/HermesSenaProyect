import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  template: `
  <app-header-admin></app-header-admin>

  <div class="container-fluid" id="bannernc" style="padding: 50px;">
    <p class="titulo">Tus productos!</p>

    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Cantidad en inventario</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products" style="background-color: white;">
          <td>{{product.name}}</td>
          <td>{{product.quantityInInventory}}</td>
          <td>{{product.price}}</td>
          <td>
            <button class="btn btn-outline-warning" style="color: black; background-color: #F9BE6B" routerLink="/update-product/{{product.name}}"><i class="bi bi-pencil"></i> Editar</button>
            <button (click) = "deleteProduct(product.name)" class="btn btn-dark" style="margin-left: 10px"><i class="bi bi-file-earmark-x"></i> Eliminar</button>
          </td>

        </tr>
      </tbody>
    </table>

    <a id="add" type="button" class="btn" (click)="createProduct()">Añade un producto!</a>

  </div>

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
    font-size: 80px;
    color: white;
}
    `
  ]
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService, private changeDetector: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.obtainProducts();
    this.changeDetector.detectChanges();
  }

  private obtainProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.changeDetector.detectChanges();
    });
  }

  createProduct(){
    this.router.navigate(['create-product']);
  }

  deleteProduct(name: string){
    this.productService.deleteProduct(name).subscribe(() => {console.log("Producto eliminado")
    this.obtainProducts();});
  }

}
