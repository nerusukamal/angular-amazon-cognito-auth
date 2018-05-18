// Importing the buil in modules and components
import { RouterModule, Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Importing router
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Importing custom components
import { LoginComponent } from "./components/login";
import { HomeComponent } from "./components/home";
// Importing the services
import { AuthService, AuthGuard } from "./shared/services";

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Adding Router to root level so that can access entire app
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // Angular Reactive Forms
    MatButtonModule, // Material Design Button Module
    MatInputModule // Material Design Input Module
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
