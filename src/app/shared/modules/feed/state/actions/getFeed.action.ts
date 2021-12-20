import { createAction, props } from "@ngrx/store";
import { GetFeedResponse } from "../../types/feed-response.interface";
import { ActionTypes } from "../actionTypes";

export const getFeedAction = createAction(
    ActionTypes.GET_FEED,
    props<{url:string}>()
)

export const getFeedSuccess = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{feed:GetFeedResponse}>()
)

export const getFeedFailuer = createAction(
    ActionTypes.GET_FEED_FAILUER
)