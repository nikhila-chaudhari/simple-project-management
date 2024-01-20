import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

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
  
  constructor(private fb: UntypedFormBuilder) { 
    console.log('Initializing Login component');
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email') as UntypedFormControl; }
  get password() { return this.loginForm.get('password') as UntypedFormControl; }

  getErrorMessage( formField: UntypedFormControl) {
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
