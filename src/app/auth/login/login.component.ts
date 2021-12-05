import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from '../state/actions/login.actions';
import { isSubmittiedSelector, validationErrorsSelector } from '../state/selectors';
import { LoginRequest } from '../types/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  isSubmitting$:Observable<boolean>;
  backendErrors$:Observable<any>

  constructor(private formBuilder: FormBuilder, private store:Store) { }

  ngOnInit(): void {
    this.initilizeForm()
    this.initlizeValues();
  }

  initilizeForm(){
    this.form = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  initlizeValues(){
    this.isSubmitting$ = this.store.pipe(select(isSubmittiedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onLogin(){
    const request:LoginRequest = {
      user:this.form.value
    }    
    this.store.dispatch(loginAction({request}))
  }

}
