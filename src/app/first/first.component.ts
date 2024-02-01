import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

interface myinterFace {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
}
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public input = 'shadow form-control my-2';
  public btn = 'btn btn-primary ';
  public special = true;
  public change = true;
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';
  public message = '';
  public classStyle = '';


  public userData: myinterFace[] = [];
  constructor(public route:Router){}
  checkindex(i: number) {
    console.log(i);
  }

  ngOnInit() {
    if (localStorage['setData']) {
      this.userData = JSON.parse(localStorage.getItem("setData")!)
    }
  }

  getStyle() {
    let findUser = this.userData.find((eachuser: any) => eachuser.Email == this.email)
    if (findUser) {
      this.message = "email already exist";
      this.classStyle = "alert alert-danger text-center"
      setTimeout(() => {
        this.message = ""
        this.classStyle = ""
      }, 2000)
    }
    else if (!this.firstname || !this.lastname || !this.email || !this.password) {
      this.message = "All fields are required";
      this.classStyle = "alert alert-danger text-center"
      setTimeout(() => {
        this.message = ""
        this.classStyle = ""
      }, 2000)
    }
    else {
      this.special = !this.special;
      let userObject = {
        Firstname: this.firstname,
        Lastname: this.lastname,
        Email: this.email,
        Password: this.password,
      };
      this.userData.push(userObject)
      console.log(this.userData);
      localStorage.setItem("setData", JSON.stringify(this.userData));
      this.route.navigate(['login'])
    }
  }
  findBtnColor() {
    this.change = !this.change;
  }
}
