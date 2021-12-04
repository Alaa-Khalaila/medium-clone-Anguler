import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffectimplements {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router:Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            this.localStorageService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailuerAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        this.router.navigateByUrl("/")
      })
    ),
    {dispatch:false}
  );

}
