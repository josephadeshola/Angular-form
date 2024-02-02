import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface myinterFace {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public input = 'shadow form-control my-2';
  public index = 0;
  public allData: any = [];
  public getCurrent: myinterFace | null = null;

  public user: myinterFace = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
  };
  ngOnInit() {
    this.getCurrent = JSON.parse(localStorage['current_user']) || null;
    if (this.getCurrent) {
      this.user = { ...this.getCurrent }; 
    }
    this.allData = JSON.parse(localStorage['setData']);
    this.index = JSON.parse(localStorage['userInfo']);
    console.log(this.allData);
  }

  deleteUser(index: number) {
    this.allData.splice(this.index, 1);
    localStorage.setItem('setData', JSON.stringify(this.allData));
    localStorage.removeItem('current_user');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  
  editUser() {
    this.allData.splice(this.index, 1, this.user);
    localStorage.setItem('users', JSON.stringify(this.allData));
    localStorage.setItem('current_user', JSON.stringify(this.user));
    console.log(this.allData);
    window.location.reload();
  }
}
