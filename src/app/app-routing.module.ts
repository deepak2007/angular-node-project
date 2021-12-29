import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserAddressDetailsComponent } from './user-address-details/user-address-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCardDetailsComponent } from './user-card-details/user-card-details.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { UserAddressEditComponent } from './user-address-edit/user-address-edit.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, canActivate: [AuthService] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AuthService] },
  { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [AuthService] },
  { path: 'product-update/:id', component: ProductUpdateComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'setting-page', component: SettingPageComponent },
  { path: 'user-address', component: UserAddressComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-address-details', component: UserAddressDetailsComponent },
  { path: 'user-address-edit/:id', component: UserAddressEditComponent },
  { path: 'user-card-details', component: UserCardDetailsComponent },
  { path: 'order', component: FoodOrderComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
