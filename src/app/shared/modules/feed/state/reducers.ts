import { Action, createReducer, on } from '@ngrx/store';
import { FeedState } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedFailuer,
  getFeedSuccess,
} from './actions/getFeed.action';

const initialState: FeedState = {
  isLoading: false,
  errors: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,

  on(
    getFeedAction,
    (state): FeedState => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getFeedSuccess,
    (state, action): FeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  
  on(
    getFeedFailuer,
    (state): FeedState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: FeedState, action: Action) {
  return feedReducer(state, action);
}
