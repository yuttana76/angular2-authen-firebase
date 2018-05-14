import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }


  signInWithTwitter() {  
    this.authService.signInWithTwitter()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithEmail() {

    
    this.authService.login(this.user.email, this.user.password);

    // this.authService.signInRegular(this.user.email, this.user.password)
    //   .then((res) => {
    //     console.log(res);
    //     this.router.navigate(['dashboard']);
    //   })
    //   .catch((err) => console.log('error: ' + err));

  }
  
  ngOnInit() {
  }

}
