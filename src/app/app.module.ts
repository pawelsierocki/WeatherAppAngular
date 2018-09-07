import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    SidenavComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      {path: "welcome", component: WelcomeComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path:'**', redirectTo: 'login', pathMatch: 'full'}

    ]),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
