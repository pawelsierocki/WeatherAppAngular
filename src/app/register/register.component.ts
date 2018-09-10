import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { User } from '../services/user'
import { HashPasswordService } from '../services/hash-password.service'
import { Cities } from '../services/cities';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})

export class RegisterComponent implements OnInit {
  myControl = new FormControl();
  subbmitted : boolean = false;
  registerForm: any;
  login: string;
  password: string;
  city: any;
  filteredOptions: Observable<string[]>;
  newUser : User;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private hash: HashPasswordService,
              private cities : Cities) { }

  get f () {return this.registerForm.controls;}

  ngOnInit() {
    if (localStorage.getItem("loggedUser")) {
      this.router.navigate(['/welcome']);
    }

    this.registerForm = this.formBuilder.group({
      formLogin: ['', Validators.required],
      formPassword: ['', [Validators.required, Validators.minLength(6)]],
      formCity: ['']     
    })

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.subbmitted = true;
    let newUser : User = {
      login: this.login,
      password: this.hash.hashPassword(this.password),
      city: this.city
    }

    let usersArray : User [] = [];

    if (!localStorage.getItem("usersArray")){
      usersArray.push(newUser);    
    } else {
      usersArray = JSON.parse(localStorage.getItem("usersArray"));
      usersArray.push(newUser);
    }

    localStorage.setItem("usersArray", JSON.stringify(usersArray));
    this.router.navigate(['/login']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
