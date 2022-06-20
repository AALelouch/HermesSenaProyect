import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  template: `

  <div *ngIf="isLogged; else loggedOut">
  <app-menu-admin></app-menu-admin>
  </div>

  <ng-template #loggedOut>
  <app-header></app-header>
  <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form #f="ngForm" (ngSubmit)="onLogin()" novalidate>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="text" name="username" id="username" class="form-control form-control-lg"
            [(ngModel)]="username" required>
            <label class="form-label" for="username">Usuario</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="password" name="password" class="form-control form-control-lg" 
            [(ngModel)]="password" required/>
            <label class="form-label" for="password">Contraseña</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-dark btn-lg btn-block">Inicia Sesion</button>


        </form>

              <!-- Alert -->
      <div *ngIf="isLoginFail;" class="alert alert-danger mt-4" role="alert">
        Credenciales Incorrectas
      </div>
      </div>
    </div>
  </div>
</section>
<br>
<br>
<br>
<app-footer></app-footer>
</ng-template>
  `,
  styles: [`
  .divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
  
  
  `
  ]
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginRequest!: LoginRequest;
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
    }
  }

  onLogin(): void {
    this.loginRequest = new LoginRequest(this.username, this.password);
    this.authService.login(this.loginRequest).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.saveToken(data.token);
        this.tokenService.setUser(this.loginRequest.username);
      },
      error => {
        this.isLogged = false;
        this.isLoginFail = true;
      }
    );
  }

}
