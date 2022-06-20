import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/utilities/header/header.component';
import { FooterComponent } from './component/utilities/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MenuAdminComponent } from './component/AdminView/menu-admin/menu-admin.component';
import { HeaderAdminComponent } from './component/AdminView/header-admin/header-admin.component';
import { InterceptorService } from './interceptor/interceptor.service';
import { ListProductComponent } from './component/AdminView/product/list-product/list-product.component';
import { CreateProductComponent } from './component/AdminView/product/create-product/create-product.component';
import { UpdateProductComponent } from './component/AdminView/product/update-product/update-product.component';
import { ListDeliveryComponent } from './component/AdminView/delivery/list-delivery/list-delivery.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { ConocenosComponent } from './component/conocenos/conocenos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MenuAdminComponent,
    HeaderAdminComponent,
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ListDeliveryComponent,
    CatalogueComponent,
    CreateDeliveryComponent,
    ConocenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
