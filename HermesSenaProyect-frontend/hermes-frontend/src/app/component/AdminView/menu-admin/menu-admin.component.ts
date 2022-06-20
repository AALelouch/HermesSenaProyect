import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-menu-admin',
  template: `
  <app-header-admin></app-header-admin>

  <div id="bannernc" class="position-relative overflow-hidden text-center">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Bienvenido</h1>
        <p class="lead font-weight-normal">Estimado administrador, podras administrar productos, usuarios e informacion de pedidos.
          <br>
          Recuerda actualizar la informacion de tu inventario para que tus clientes puedan realizar pedidos con normalidad
        </p>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    #bannernc{
    width: 100%;
    height: 100%;
    color: white;
    background-image: url("/assets/img/banner-de-verde-bosque-verano-naturaleza-fondo-207273923.jpg");
    background-color: rgb(48, 48, 48);
    background-blend-mode: soft-light;
}
  `]
})
export class MenuAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
