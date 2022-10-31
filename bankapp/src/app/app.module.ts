import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './balance/balance.component';
import { CreditComponent } from './credit/credit.component';
import { DeleteComponent } from './delete/delete.component';
import { HighlightDirective } from './directive/highlight.directive';
import { AnimationsComponent } from './animations/animations.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    BalanceComponent,
    CreditComponent,
    DeleteComponent,
    HighlightDirective,
    AnimationsComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
