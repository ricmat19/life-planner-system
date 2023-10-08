import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './modals/account-forms/login-form/login-form.component';
import { SignupFormComponent } from './modals/account-forms/signup-form/signup-form.component';
import { ForgotPasswordFormComponent } from './modals/account-forms/forgot-password-form/forgot-password-form.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './games/game/game.component';
import { GamesComponent } from './games/games/games.component';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginFormComponent,
    SignupFormComponent,
    ForgotPasswordFormComponent,
    HomeComponent,
    GameComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
