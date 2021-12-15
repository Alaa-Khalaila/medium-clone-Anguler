import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/auth/types/auth-state.interface';

export const authFeatureSelector = createFeatureSelector< AuthState>(
  'auth'
);

export const isSubmittiedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState:AuthState)=> authState.ValidationErrors
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState:AuthState)=> authState.currentUser
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState:AuthState)=> authState.isLoggedIn
)
