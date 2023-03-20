import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get firstName(){ return this.myForm.get('firstName') as FormControl}
  get lastName(){ return this.myForm.get('lastName') as FormControl}
  get email(){ return this.myForm.get('email') as FormControl}
  get password(){ return this.myForm.get('password') as FormControl}
  get confirmPassword(){ return this.myForm.get('confirmPassword') as FormControl}


  getErrorMessage( formField: FormControl) {
    if (formField.hasError('required')) {
      return 'This field is required';
    }
    return formField.hasError('email') ? 'Not a valid email' : '';
  }

  register(): void{
    if( this.myForm.invalid){
      return;
    }
    console.log( 'email: ' , this.email.value);
  }

}
