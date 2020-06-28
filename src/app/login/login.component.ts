import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  otpLoginForm: FormGroup = new FormGroup({
    phone: new FormControl(null, [
      Validators.minLength(10),
      Validators.required,
    ]),
    otp: new FormControl(null, [Validators.minLength(4)]),
  });

  otpValidate: FormGroup = new FormGroup({
    otp: new FormControl(null, [
      Validators.required,
      // Validators.pattern('[0-9]{0-10}'),
      Validators.minLength(4),
    ]),
  });

  phoneLogin = false;
  generateOtpBtn = false;
  verifyOtpBtn = false;
  constructor(private _router: Router, private _user: UserService) {}

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  login() {
    if (!this.otpLoginForm.valid) {
      console.log('invalid number');
      return;
    }
    this._user.login(JSON.stringify(this.loginForm.value)).subscribe(
      (data) => {
        console.log(data), this._router.navigate(['/user']);
      },
      (error) => console.error(error)
    );
    // console.log(JSON.stringify(this.loginForm.value));
  }

  validatePhone() {
    if (!this.otpLoginForm.valid) {
      console.log('invalid');
      return;
    }
    this._user.validatePhone(JSON.stringify(this.otpLoginForm.value)).subscribe(
      (data) => {
        console.log(data), this._router.navigate(['/login']);
        this.generateOtpBtn = !this.generateOtpBtn;
      },
      (error) => console.error(error)
    );
  }

  generateOtp() {
    this.verifyOtpBtn = !this.verifyOtpBtn;
    if (!this.otpLoginForm.valid) {
      console.log('invalid');
      return;
    }
    this._user.generateOtp(JSON.stringify(this.otpLoginForm.value)).subscribe(
      (data) => {
        console.log(data), this._router.navigate(['/login']);
        this.generateOtpBtn = !this.generateOtpBtn;
      },
      (error) => console.error(error)
    );
  }

  validateOtp() {
    if (!this.otpLoginForm.valid) {
      console.log('invalid');
      return;
    }
    this._user.validateOtp(JSON.stringify(this.otpLoginForm.value)).subscribe(
      (data) => {
        console.log(data), this._router.navigate(['/user']);
      },
      (error) => console.error(error)
    );
  }

  togglePhone() {
    this.phoneLogin = !this.phoneLogin;
  }

  ngOnInit(): void {}
}
