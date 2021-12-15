import { createAction, props } from "@ngrx/store";
import { CurrentUser } from "src/app/shared/types/current-user.interface";
import { ActionTypes } from "../actionTypes";

export const getCurrentUserAction = createAction(
    ActionTypes.GET_CUURENT_USER
)

export const getCurrentUserSuccess =createAction(
    ActionTypes.GET_CUURENT_USER_SUCCESS,
    props<{currentUser:CurrentUser}>()
)

export const getCurrentUserFailuer = createAction(
    ActionTypes.GET_CUURENT_USER_FAILUER
)