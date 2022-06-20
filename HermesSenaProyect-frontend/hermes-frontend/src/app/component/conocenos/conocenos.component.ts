import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  template: `
   <app-header></app-header>
   <div id="quienesSomos" class="container-fluid mt-0">
        <div class="row" style="background-color: #F9BE6B">
            <div class="col-6 text-start mt-5 mb5">
                <h2>¿Quienes Somos?</h2>
                <p>En el transcurso de estos 3 años de experiencia en la distribución de nuestros productos, Quesos y Quesillos Ronces Valles , hemos sido un negocio que realiza su labor con pasión, compromiso para conquistar cada día más el paladar de los colombianos, ofreciendo productos de calidad, confiables y con el sabor de nuestra tradición elaborados artesanalmente por familias campesinas en nuestro bello Ronces Valles.</p>

            </div>
            <div class=" col-6 text-start mt-5 mb-5">
                <img class="img-fluid" src="assets/img/Conocenos.jpeg" alt="quienessomos">
            </div>
        </div>
        <div class="row" style="background-color: var(--white); color: black;">
            <div class=" col-6 text-start mt-5 mb-5">
                <img class="img-fluid" src="assets/img/conocenos2.jpg" alt="quienessomos">
            </div>
            <div class="col-6 text-start mt-5 mb5">
                <h2>Nuestro origen</h2>
                <p>Quesos y Quesillo Ronces Valles somos distribuidores de Quesos y Quesillos, fundada en el año de 2019 en la ciudad de ibague (Tolima), con el deseo de progresar del señor y señora (Andrés Ducuara y Rocio Cardozo);  nuestros productos son traídos del municipio de Ronces Valles (Tolima) zona ganadera en donde se podroduce fácilmente la materia prima para la elaboración de los productos. </p>            </div>
        </div>
        <div class="row" style="background-color: #F9BE6B;">
            <div class="col-6 text-start mt-5 mb5">
                <h2>Nuestro Producto</h2>
                <p>Para ti tenemos los mejores y esquisitos quesos y Quesillos Ronces Valles, productos de calidad traídos del bello Ronces Valles (Tolima), hechos por familias campesinas, siendo productos hechos con pasión y con sabor para enamorar el paladar Colombiano, los mejores quesos y Quesillos artesanales del la ciudad de Ibague Tolima</p>
            </div>
            <div class=" col-6 text-start mt-5 mb-5">
                <img class="img-fluid" src="assets/img/conocenos3.jpg" alt="quienessomos">
            </div>
        </div>
    </div>
   <app-footer></app-footer>
  `,
  styles: [
    `
    :root{
    --black: #000;
    --white: #ffff;
    --gray: #EAE2D7;
    --dyellow: #F9BE6B;
}

#bannerCatalogo{
    width: 100%;
    height: 100%;
    background-image: url("/images/bannerCatalogo.jpg");
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

*{
    box-sizing: border-box;
}

body{
    font-family: Berkshire Swash !important;
    font-weight: lighter !important;
    color: var(--white) !important;
}

/* Para el nav */

#nav{
    background-color: black !important;
}

nav div div ul li a{
    color: white !important;
    font-size: 180%;}

nav div div ul li :hover{
    color: var(--dyellow) !important;
}

i :hover{
    font-size: 100% !important;
    color: #F9BE6B !important;
}

#bnav{
    background-color: var(--dyellow) !important;
}

#search{
    color:  var(--gray) !important;
    border-color: #EAE2D7 !important;
}

/* Para el desplegable */

nav div div div ul li a{
    color: var(--black) !important;
    font-size: 100%;
    margin: 0;
}

nav div div div ul li :hover{
    color: var(--black) !important;
    font-size: 100%;
    margin: 0;
}
nav div div div ul li :active{
    background-color: var(--dyellow) !important;
    color: var(--black) !important;
    font-size: 100%;
    margin: 0;
}

#conocenos{
    width: 190px;
}

#catalogo{
    width: 160px;
}

/* Estilos para el logo */
#logo{
    height: 100px;
}

#imglogo{
    height: 100%;
}

/* Cuerpo */

#bannernc{
    width: 100%;
    height: 100%;
    background-image: url("/images/banner-de-verde-bosque-verano-naturaleza-fondo-207273923.jpg");
    background-color: rgb(48, 48, 48);
    background-blend-mode: soft-light;
}

.titulo{
    text-align: center;
    font-size: 80px;
}
    `
  ]
})
export class ConocenosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
