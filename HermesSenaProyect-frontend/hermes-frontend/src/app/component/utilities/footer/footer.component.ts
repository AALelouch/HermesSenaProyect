import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer -->
<footer class=" bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <section class="mb-4">

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>

        <a class="btn btn-outline-light btn-floating m-1"
          href="https://api.whatsapp.com/send?phone=573203276505&text=hola,%20qu%C3%A9%20tal" role="button"><i
            class="bi bi-whatsapp"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="https://goo.gl/maps/ZohPpNySdxky383k9" role="button"><i
            class="bi bi-geo-alt"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="https://goo.gl/maps/ZohPpNySdxky383k9" role="button">
          <p style="margin: auto;">Contactanos</p>
        </a>
      </section>
    </div>


    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Nuestro producto es 100% natural y hecho en:
      <a class="text-white" href=""> Roncesvalles-Tolima</a>
    </div>
  </footer>
  `,
  styles: [
    `
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
