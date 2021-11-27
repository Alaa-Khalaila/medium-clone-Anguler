import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RegisterRequest } from 'src/app/auth/types/register-request.interface';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';
import { registerAction } from '../state/actions/register.action';
import { isSubmittiedSelector, validationErrorsSelector } from '../state/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$:Observable<any>

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initilizeForm();
    this.initilizeValues();
  }

  initilizeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initilizeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittiedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onRegister() {
    const request : RegisterRequest = {
      user:this.form.value
    } 

    this.store.dispatch(registerAction({request}));
  }
}
