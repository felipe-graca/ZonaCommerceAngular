import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { SnackComponent } from './componentes/Snack/Snack.component';
import { NaviBarComponent } from './componentes/NaviBar/NaviBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './Pages/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    NaviBarComponent,
    HomeComponent,
    SnackComponent,
    CarrinhoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
