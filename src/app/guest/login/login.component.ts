import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/profile']);
      return;
    }
  }

  login() {
    this.authenticationService.login(this.user).subscribe(date => {
      this.router.navigate(['/profile']);
    }, err => {
      this.errorMessage = 'Username and/or Password Incorrect!'
      console.log(err);
    })
  }

}
