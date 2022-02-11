import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../state/actions/getFeed.action';
import { dataSelector, errorsSelector, isLoadingSelector } from '../../state/selectors';
import { GetFeedResponse } from '../../types/feed-response.interface';
import { parseUrl,stringify } from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input("apiUrl") apiUrl: string;
  limit: number = environment.limit;
  baseUrl: string;
  currentPage: number = 1;
  isLoading$: Observable<boolean>
  data$: Observable<GetFeedResponse | null>
  errors$: Observable<any>
  queryParamsSubscription$: Subscription;

  constructor(private store: Store, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()

  }

  initializeValues(): void {
    this.baseUrl = this.router.url.split("?")[0]

    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.data$ = this.store.pipe(select(dataSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  initializeListeners(): void {
    this.queryParamsSubscription$ = this.activateRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || "1")
      this.fetchData()
    })
  }

  fetchData():void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    const stringifiedParams =stringify({
      limit:this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams =`${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription$.unsubscribe();
  }
}
