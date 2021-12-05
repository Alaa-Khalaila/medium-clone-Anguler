import { createAction, props } from "@ngrx/store";
import { BackendErrors } from "src/app/shared/types/backend-errors.interface";
import { CurrentUser } from "src/app/shared/types/current-user.interface";
import { LoginRequest } from "../../types/login-request.interface";
import {ActionTypes} from "../actionTypes"

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{request:LoginRequest}>()
)

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser:CurrentUser}>()
)

export const loginFailuerAction = createAction(
    ActionTypes.LOGIN_FAILUER,
    props<{errors:BackendErrors}>()
)