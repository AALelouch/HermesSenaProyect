import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryProductResponse } from 'src/app/model/delivery-product-response';
import { DeliveryResponse } from 'src/app/model/delivery-response';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'app-list-delivery',
  template: `
  <app-header-admin></app-header-admin>

  <div class="container-fluid" id="bannernc" style="padding: 50px;">
    <p class="titulo">Tus Pedidos!</p>

    <form #f="ngForm" (ngSubmit)="onSubmit()" class="form-inline my-2 my-lg-0">
      <input name="nameCustomer" id="nameCustomer" [(ngModel)] = "name" class="form-control mr-sm-2" type="search" placeholder="Busca por nombre de cliente" aria-label="Search">
      <br>
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" style="color: black; background-color: #F9BE6B;">Buscar</button>
    </form>

    <table class="table table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>Id</th>
          <th>Cliente</th>
          <th>Direccion</th>
          <th>Celular</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let deliveryResponse of deliveriesResponse" style="background-color: white;">
          <td>{{deliveryResponse.id}}</td>
          <td>{{deliveryResponse.nameCustomer}}</td>
          <td>{{deliveryResponse.addressCustomer}}</td>
          <td>{{deliveryResponse.phoneCustomer}}</td>
          <td>{{deliveryResponse.totalOfAll}}</td>
          <td>
            <button (click) = "deleteDelivery(deliveryResponse.id)" class="btn btn-dark" style="margin-left: 10px"><i class="bi bi-file-earmark-x"></i> Eliminar</button>
            <button (click) = "obtainDeliveryProduct(deliveryResponse.id)" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style="color: black; background-color: #F9BE6B; margin-left: 10px;"><i class="bi bi-eye"></i> Detalles</button>
          </td>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="0" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Productos del pedido</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          <div class="modal-body">
                            <table class="table table-striped">
                              <thead class="table-dark">
                                <tr>
                                  <th>Nombre</th>
                                  <th>Precio</th>
                                  <th>Cantidad</th>
                                  <th>Total</th>
                                </tr>
                                <tr *ngFor="let productResponse of productResponses">
                                  <td>{{productResponse.name}}</td>
                                  <td>{{productResponse.price}}</td>
                                  <td>{{productResponse.quantity}}</td>
                                  <td>{{productResponse.total}}</td>
                                </tr>
                              </thead>
                            </table>
                        </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                  </div>
                </div>
        </tr>
      </tbody>
    </table>

    <a id="add" type="button" class="btn" href="create-delivery">Añade un pedido!</a>
    <a id="add" type="button" class="btn" (click)="obtainDeliveries()">Ver todos!</a>

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
        margin-left: 10px;
      }

.titulo{
    text-align: center;
    font-size: 80px;
    color: white;
}
     `
  ]
})
export class ListDeliveryComponent implements OnInit {

  name: string = "";

  deliveriesResponse: DeliveryResponse[] = [];
  productResponses: DeliveryProductResponse[] = [];

  constructor(private deliveryService: DeliveryService, private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.obtainDeliveries();
  }

  obtainDeliveries() {
    this.deliveryService.getAllDeliveries().subscribe(
      data => {
        this.deliveriesResponse = data;
        console.log(this.deliveriesResponse);
        this.changeDetector.detectChanges();
      }
    );
  }

  obtainDeliveryProduct(id: number) {
    this.deliveryService.getByIdDelivery(id).subscribe(
      data => {
        this.productResponses = data.deliveryProduct;
        console.log(this.productResponses);
        this.changeDetector.detectChanges();
      }
    );
  }

  deleteDelivery(id: number) {
    this.deliveryService.deleteDelivery(id).subscribe(
      data => {
        this.obtainDeliveries();
      }
    );
  }

  onSubmit() {
    this.deliveryService.getByNameDelivery(this.name).subscribe(
      data => {
        this.deliveriesResponse = data;
        console.log(this.deliveriesResponse);
        this.changeDetector.detectChanges();
      }
    );
  }

}
