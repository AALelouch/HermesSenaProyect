import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header-admin',
  template: `
      <!-- Header -->
      <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light m-0">

<div class="container-fluid">

  <a class="navbar-brand" href="/" id="logo"><img id="imglogo" src="assets/img/logo.png" alt="logo"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span id="bnav" class="navbar-toggler" style="color: white;">Menu</span>
  </button>
  <div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 row">
      <li class="nav-item col" style="width: auto;">
        <a id="home" class="nav-link active" aria-current="page" href="/"><i class="bi bi-person-circle icon" roll="img"></i>
          Usuarios</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link" href="conocenos.html" id="conocenos"><i class="bi bi-star" roll="img"></i>
          Productos</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link" href="catalogo.html" id="catalogo"><i class="bi bi-send" roll="img"></i> 
        Pedidos</a>
      </li>
      <li class="nav-item col" (click)="onLogOut()">
        <a style="padding: 15px;" class="nav-link" href=""><i class="bi bi-person-square" roll="img"></i> Salir</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  `,
  styles: [`
    :root{
    --black: #000;
    --white: #ffff;
    --gray: #EAE2D7;
    --dyellow: #F9BE6B;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#nav{
    background-color: black !important;
}

nav div div ul li a{
    color: white !important;
    font-size: 180%;}

nav div div ul li :hover{
    color: #F9BE6B !important;
}

i :hover{
    font-size: 100% !important;
    color: #F9BE6B !important;
}

#bnav{
    background-color: var(--black) !important;
    padding: 30px;
}

/* Para el desplegable */

nav div div div ul li a{
    color: var(--black) !important;
    font-size: 100%;
}

nav div div div ul li :hover{
    color: var(--dyellow) !important;
    font-size: 100%;
    margin: 0;
}
nav div div div ul li :active{
    background-color: var(--dyellow) !important;
    color: var(--black) !important;
    font-size: 100%;
    margin: 0;
}

#home{
  width: 210px;
  padding: 15px;
}

#conocenos{
    width: 230px;
    padding: 15px;
}

#catalogo{
    width: 450px;
    padding: 15px;
}

/* Estilos para el logo */
#logo{
    height: 100px;
    width: 200px;
}

#imglogo{
    height: 100%;
}
  `]
})
export class HeaderAdminComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.tokenService.logOut();
    window.location.reload();
  }

}
