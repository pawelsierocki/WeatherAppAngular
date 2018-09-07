import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HashPasswordService } from '../../assets/services/hash-password.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: string;
  password: string;
  wrongData: boolean = false;
  constructor(private router: Router,
              private hash: HashPasswordService) { }

  ngOnInit() {
    if (localStorage.getItem("loggedUser")) {
      this.router.navigate(['/welcome']);
    }
  }

  onSubmit() {
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.forEach(element => {
      if (this.login === element.login && this.hash.hashPassword(this.password) === element.password) {
        localStorage.setItem("loggedUser", JSON.stringify(element));
        this.router.navigate(['/welcome']);
      }else{
        this.wrongData = true;
      }
    });


  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
