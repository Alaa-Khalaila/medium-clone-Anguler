import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from 'src/app/auth/types/auth-state.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailuerAction,
} from 'src/app/auth/state/actions/register.action';
import { loginAction, loginFailuerAction, loginSuccessAction } from './actions/login.actions';
import { AuthService } from '../services/auth.service';

const initialState: AuthState = {
  isSubmitting: false,
  isLoggedIn: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(registerSuccessAction, (state: AuthState, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),

  on(registerFailuerAction, (state: AuthState, action) => ({
    ...state,
    isSubmitting: false,
    ValidationErrors: action.errors,
  })),

  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(loginSuccessAction,(state:AuthState,action)=>({
    ...state,
    isSubmitting:false,
    isLoggedIn:true,
    currentUser:action.currentUser
  })),

  on(loginFailuerAction,(state:AuthState,action)=>({
    ...state,
    isSubmitting:false,
    ValidationErrors:action.errors
  }))
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
