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
  loginAction,
  loginFailuerAction,
  loginSuccessAction,
} from '../actions/login.actions';

@Injectable()
export class LoginEffectImplements {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageServie: LocalStorageService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUser) => {
            this.localStorageServie.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailuerAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
