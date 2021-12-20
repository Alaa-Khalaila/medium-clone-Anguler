import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedService } from '../../services/feed.service';
import { GetFeedResponse } from '../../types/feed-response.interface';
import {
  getFeedAction,
  getFeedFailuer,
  getFeedSuccess,
} from '../actions/getFeed.action';

@Injectable()
export class GetFeedImplements {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponse) => {
            return getFeedSuccess({ feed });
          }),

          catchError(() => {
            return of(getFeedFailuer());
          })
        );
      })
    )
  );
}
