import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ListProductComponent } from './component/AdminView/product/list-product/list-product.component';
import { CreateProductComponent } from './component/AdminView/product/create-product/create-product.component';
import { AuthGuard } from './guard/auth.guard';
import { UpdateProductComponent } from './component/AdminView/product/update-product/update-product.component';
import { ListDeliveryComponent } from './component/AdminView/delivery/list-delivery/list-delivery.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { ConocenosComponent } from './component/conocenos/conocenos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ListProductComponent, canActivate: [AuthGuard] },
  { path: 'create-product', component: CreateProductComponent, canActivate: [AuthGuard] },
  { path: 'update-product/:name', component: UpdateProductComponent, canActivate: [AuthGuard] },
  { path: 'deliveries', component: ListDeliveryComponent, canActivate: [AuthGuard] },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'create-delivery', component: CreateDeliveryComponent },
  { path: 'conocenos', component: ConocenosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
