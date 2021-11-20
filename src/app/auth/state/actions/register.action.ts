import { createAction, props } from '@ngrx/store';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { RegisterRequest } from 'src/app/auth/types/register-request.interface';
import { ActionTypes } from '../actionTypes';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailuerAction = createAction(
    ActionTypes.REGISTER_FAILUER,
    props<{errors:BackendErrors}>()
)