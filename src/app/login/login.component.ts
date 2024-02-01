import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface myinterFace {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public input = 'shadow form-control my-2';
  public btn = 'btn btn-primary ';
  public email = '';
  public password = '';
  public message = '';
  public classStyle = '';
  public newUserArray: myinterFace[] = [];
  constructor(public route: Router) { }

  ngOnInit() {
    if (localStorage['setData']) {
      this.newUserArray = JSON.parse(localStorage['setData']);
      console.log(this.newUserArray);
    }
  }
  LoginUser() {
    let findUser = this.newUserArray.find(
      (getUser) =>
        getUser.Email == this.email && getUser.Password == this.password
    );
    if (findUser) {
      let eachIndex = this.newUserArray.indexOf(findUser);
      localStorage.setItem('userInfo', JSON.stringify(eachIndex));
      localStorage.setItem("current_user", JSON.stringify(findUser))
      this.message = 'Login Successful';
      this.classStyle = 'alert alert-success text-center';
      setTimeout(() => {
        this.route.navigate(['dashboard']);
      }, 2000);
    }
    else {
      this.message = 'invalid details';
      this.classStyle = 'alert alert-danger text-center';
      setTimeout(() => {
        this.message = '';
        this.classStyle = '';
      }, 2000);
    }
  }
}
