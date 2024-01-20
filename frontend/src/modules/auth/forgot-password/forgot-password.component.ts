import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  
  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: UntypedFormBuilder, 
    private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }
  get email() { return this.myForm.get('email') as UntypedFormControl; }

  getErrorMessage( formField: UntypedFormControl) {
    if (formField.hasError('required')) {
      return 'This field is required';
    }
    return formField.hasError('email') ? 'Not a valid email' : '';
  }

  resetPassword(): void {
    if( this.myForm.invalid){
      return;
    }
    this._snackBar.open('Password was reset. Please check your email for further instructions.', '', {
      duration: 5000
    });
  }

}
