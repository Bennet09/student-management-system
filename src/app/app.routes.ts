import { Routes } from '@angular/router';
import { Login } from './login/login';
import { StudentManagement } from './student-management/student-management';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  { path: 'students', component: StudentManagement }
];