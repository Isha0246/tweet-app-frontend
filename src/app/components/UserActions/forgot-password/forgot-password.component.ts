import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }
  userId: string = '';
  password!: string;
  loginData!: Login;
  validForm: boolean = true;
  confirmPassword?: string;
  isPassword: boolean = false;
  getResponse: any;
  err: any
  isPasswordChanged: boolean = false;
  ngOnInit(): void {
  }
  changePassword() {
    let login = new Login(this.userId, this.password);
    this.userService.forgotPassword(login).subscribe(data => {
      this.getResponse = data;
      if (this.getResponse.responseMessage === "Password Updated Successfully!") {
        this.isPasswordChanged = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
          this.isPasswordChanged = false;
        }, 3000);
      }
      else {
        this.isPasswordChanged = false;
      }
    },
      (error) => {
        this.err = error;
        if (this.err.data.responseMessage = "Invalid Username or Password!")
          alert("Please Enter Valid emailId");
      }
    )
  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }
  onpass() {
    if (this.password != null) {
      this.onCheckPassword()
    }
  }

}
