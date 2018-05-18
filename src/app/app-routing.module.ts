/**
 * @author DineshRachumalla
 * @Date 18-05-2018
 * @desc Router File, defines the routes in this files based on component and its configurations
 */
import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login";
import { HomeComponent } from "./components/home";
import { AuthGuard } from "./shared/services";
// Defining the routes and exporting as a constant so that cannot be altered by any other
export const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];
