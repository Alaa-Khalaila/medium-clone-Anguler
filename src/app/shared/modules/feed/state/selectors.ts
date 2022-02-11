import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from '../types/feed-state.interface';

export const feedFeaturSelector = createFeatureSelector<FeedState>('feed');

export const isLoadingSelector = createSelector(
  feedFeaturSelector,
  (feedState: FeedState) => feedState.isLoading
);
export const errorsSelector = createSelector(
  feedFeaturSelector,
  (feedState: FeedState) => feedState.errors
);
export const dataSelector = createSelector(
  feedFeaturSelector,
  (feedState: FeedState) => feedState.data
);
