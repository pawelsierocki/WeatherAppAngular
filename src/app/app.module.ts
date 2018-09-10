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
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewComponent } from './location-style/view.component';
import { OthercitiesComponent } from './othercities/othercities.component';
import { Cities } from './services/cities';
import { FavouritesComponent } from './favourites/favourites.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    SidenavComponent,
    ViewComponent,
    OthercitiesComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      {path: "welcome", component: WelcomeComponent},
      {path: "cities", component: OthercitiesComponent},
      {path: "favourites", component: FavouritesComponent},
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
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [
    Cities
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
