import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { JWTTokenService } from '../service/jwttoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private jwt: JWTTokenService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['admin@admin.com', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.api.logIn(this.loginForm.value, (res) => {
      //save jtw token
      //redirect
      this.jwt.setToken('token', res.token)
      this.router.navigateByUrl('/');
    })
  }

}
