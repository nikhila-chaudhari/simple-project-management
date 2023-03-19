import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  hide = true;
  
  constructor(private fb: FormBuilder) { 
    console.log('Initializing Login component');
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email') as FormControl; }
  get password() { return this.loginForm.get('password') as FormControl; }

  getErrorMessage( formField: FormControl) {
    if (formField.hasError('required')) {
      return 'This field is required';
    }
    return formField.hasError('email') ? 'Not a valid email' : '';
  }

  login(): void {
    if( this.loginForm.invalid){
      return;
    }
    console.log( 'email: ' , this.email.value);
  }

}
