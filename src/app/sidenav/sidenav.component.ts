import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentUser : User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser"));
  }

  logout() {
    localStorage.removeItem("loggedUser");

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }
}
