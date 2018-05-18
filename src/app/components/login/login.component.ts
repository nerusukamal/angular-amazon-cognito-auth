/**
 * @author DineshRachumalla
 * @Date 18-05-2018
 * @desc login component file contians the angular reactive forms instead of template driven forms
 * and authentication functionality
 */
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// Injecting services
import { AuthService } from "../../shared/services";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }
  /**
   * @method createLogigForm creating an angular reactive form field with validations
   */
  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      password: [null, Validators.required]
    });
  }

  public OnSubmit(): void {
    /**
     * @method AuthService.authenticateCongnito calling the cognito authentication 
     * @param {string} username
     * @param {string} password
     * @return {object} With accesstoken and payload
     */
    this.authService
      .authenticateCongnito({
        Username: this.loginForm.value.username,
        Password: this.loginForm.value.password
      })
      .subscribe(result => {
        // verify the result having the accessToken and payload information
        if (result && result.accessToken) {
          // After information is received send it to angular setters in services and can utlised
          this.authService.accessToken = result.accessToken.jwtToken;
          this.authService.userLoggedIn = true;
          this.authService.UserDetails = {
            username: result.accessToken.payload.username
          };
          // Route to home screen after success
          this.router.navigate(["home"]);
        }
      });
  }
}
