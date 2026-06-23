import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('Login successful!');
      this.router.navigate(['/students']);
    } else {
      alert('Invalid credentials');
    }
  }
}