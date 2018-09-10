import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { OthercitiesComponent } from "../othercities/othercities.component";
import { FavouritesComponent } from "../favourites/favourites.component";

export const arrRoutes : Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: "cities", component: OthercitiesComponent},
    {path: "favourites", component: FavouritesComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'**', redirectTo: 'login', pathMatch: 'full'}
]