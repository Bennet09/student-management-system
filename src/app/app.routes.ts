import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentManagementComponent } from './student-management/student-management.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'students', component: StudentManagementComponent }
];