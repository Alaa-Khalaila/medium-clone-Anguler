import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffectimplements  {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse:HttpErrorResponse) => {
            return of(registerFailuerAction({errors: errorResponse.error.errors}));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}

}
