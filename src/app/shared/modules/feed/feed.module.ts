import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed',reducers)
  ],
  exports:[FeedComponent],
  providers:[FeedService]
})
export class FeedModule { }
