import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewComponent } from './location-box/view.component';
import { OthercitiesComponent } from './othercities/othercities.component';
import { Cities } from './services/cities';
import { FavouritesComponent } from './favourites/favourites.component';
import { arrRoutes } from '../app/services/routes'


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
    RouterModule.forRoot(arrRoutes),
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
