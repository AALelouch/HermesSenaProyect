import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  template: `
     <app-header></app-header>
     <div class="container-fluid mt-4 mb-4" id="bannerCatalogo">
    <p class="titulo">Catalogo</p>
  </div>

  <div class="container mt-0 mb-4">
    <div class="row justify-content-center">
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="/assets/img/queso.jpg" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Queso</h5>
          <p class="card-text" style="color: black;">El mejor queso criollo de la ciudad de  ibague (Tolima), traído de el bello Ronces Valles (Tolima) hecho con pasión y dedicación por familias campesinas para producir el mejor QUESO </p>
          <button type="button" class="btn btn-primary"><a class="btn" href="create-delivery">Ordena Ya!</a></button>
        </div>
      </div>
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="/assets/img/quesillo.jpg" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Quesillo</h5>
          <p class="card-text" style="color: black;">Tenemos el mejor Quesillo hecho y traído de Ronces Valles (Tolima) hecho con pasión y dedicación por familias campesinas, las cuales trabajan cada día para enamorar el paladar de los colombianos</p>
            <button type="button" class="btn btn-primary"><a class="btn" href="create-delivery">Ordena Ya!</a></button>

        </div>
      </div>
      <div class="card mb-3 col-md-3 border-dark m-3">
        <img src="/assets/img/mantequilla.jpg" style="width: 100%;" class="card-img-top m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: black;">Mantequilla</h5>
          <p class="card-text" style="color: black;">Originaria de Ronces Valles (Tolima),  saludable y con el mejor sabor para enamorar el paladar de los colombianos con el mejor y esquisito queso mantequilla. </p>
            <button type="button" class="btn btn-primary"><a class="btn" href="create-delivery">Ordena Ya!</a></button>

        </div>
      </div>
    </div>
  </div>
<app-footer></app-footer>
  `,
  styles: [
    `
    #bannerCatalogo{
    width: 100%;
    height: 100%;
    background-image: url("/assets/img/bannerCatalogo.jpg");
    background-color: rgb(48, 48, 48);
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0%;
}

.tituloConocenos{
    text-align: center;
    font-size: 70px;
}

div div div div button{
    background-color: #EAE2D7 !important;
    color: var(--black) !important;
    border-color: var(--gray) !important;
}

.titulo{
    text-align: center;
    font-size: 80px;
    color: white;
}

    `
  ]
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
