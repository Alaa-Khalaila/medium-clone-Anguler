import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailuer,
  getCurrentUserSuccess,
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserImplements {
  constructor(private actions$: Actions, private authService: AuthService, private localStorageService:LocalStorageService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.localStorageService.get("accessToken");
        if(!token){
          return of(getCurrentUserFailuer())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) => {
            return getCurrentUserSuccess({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailuer());
          })
        );
      })
    )
  );
}
