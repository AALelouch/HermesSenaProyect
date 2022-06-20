import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <!-- Carrusel de imagenes -->
    <div id="carouselExampleIndicators"  class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" style="height: auto;">
      <div class="carousel-item active">
        <img src="assets/img/Sector-rural-Roncesvalles-1100x550.jpg" class="d-block w-100" alt="ronces">
      </div>
      <div class="carousel-item">
        <img src="assets/img/1618429549_715140_1618429660_noticia_normal.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="assets/img/ganado-ronces.jpeg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container-fluid mt-4 mb-4" id="bannernc">
    <p class="titulo">Nuestros Clientes</p>
  </div>

  <div class="container mt-0 mb-4">
    <div class="row justify-content-center">
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="assets/img/familia.jpg" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Familias</h5>
          <p class="card-text" style="color: black;">Para nuestras familias Colombianas, tenemos los mejores quesos, quesillos y mantequilla de la ciudad de ibague(Tolima), contamos con productos artesanales hechos en Ronces Valles (Tolima) con la dedicación y esfuerzo de familias ganaderas  </p>
        </div>
      </div>
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="assets/img/Panaderia.jpeg" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Panaderias</h5>
          <p class="card-text" style="color: black;">Para ti tenemos los mejores quesos y Quesillos, ideales para tus preparaciones para conquistar el paladar Colombiano ,nuestros productos  hechos en el bello Ronces Valles (Tolima), que esperas para pedirlo!!! </p>
        </div>
      </div>
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="assets/img/34.jpg" style="width: 100%;" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Tiendas</h5>
          <p class="card-text" style="color: black;">Para ti tenemos los mejores quesos y Quesillos, ideales para tus preparaciones para conquistar el paladar Colombiano ,nuestros productos  hechos en el bello Ronces Valles (Tolima), que esperas para pedirlo!!! </p>
        </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [`
  #bannernc{
    width: 100%;
    height: 100%;
    background-image: url("/assets/img/banner-de-verde-bosque-verano-naturaleza-fondo-207273923.jpg");
    background-color: rgb(48, 48, 48);
    background-blend-mode: soft-light;
}

.titulo{
    text-align: center;
    font-size: 80px;
    color: white;
}
    `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
