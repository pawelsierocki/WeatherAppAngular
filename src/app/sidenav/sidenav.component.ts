import { Component, OnInit } from '@angular/core';
import { User } from '../../assets/services/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentUser : User;

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser"));
  }

}
