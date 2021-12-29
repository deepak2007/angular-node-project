import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
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
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { FoodOrderComponent } from './food-order/food-order.component';
import { UserAddressEditComponent } from './user-address-edit/user-address-edit.component';

@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ForgotPasswordComponent,
    SettingPageComponent,
    UserAddressComponent,
    UserAddressDetailsComponent,
    UserProfileComponent,
    UserCardDetailsComponent,
    ModalComponent,
    FoodOrderComponent,
    UserAddressEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, ModalService],
  bootstrap: [MainComponent]
})

export class AppModule { }
