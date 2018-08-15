import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';

const appRoutes: Routes =[
  { path: '', component: LandingpageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'accountpage', component: AccountpageComponent },
  { path: 'cartpage', component: CartpageComponent },
  { path: 'checkoutpage', component: CheckoutpageComponent },
  { path: 'loginpage', component: LoginpageComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent,
    LandingpageComponent,
    LoginpageComponent,
    AccountpageComponent,
    CartpageComponent,
    CheckoutpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
