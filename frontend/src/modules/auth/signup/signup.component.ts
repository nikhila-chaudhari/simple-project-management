import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

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

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  get firstName(){ return this.myForm.get('firstName') as UntypedFormControl}
  get lastName(){ return this.myForm.get('lastName') as UntypedFormControl}
  get email(){ return this.myForm.get('email') as UntypedFormControl}
  get password(){ return this.myForm.get('password') as UntypedFormControl}
  get confirmPassword(){ return this.myForm.get('confirmPassword') as UntypedFormControl}


  getErrorMessage( formField: UntypedFormControl) {
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
