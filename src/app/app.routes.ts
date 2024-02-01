import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { myguardGuard } from './guardes/myguard.guard';

export const routes: Routes = [
    {path:'',component:NavbarComponent,children:[
        {path:'create',component:FirstComponent},
        {path:'login',component:LoginComponent},
        {path:'dashboard',component:DashboardComponent,canActivate:[myguardGuard]},
    ]}
];
