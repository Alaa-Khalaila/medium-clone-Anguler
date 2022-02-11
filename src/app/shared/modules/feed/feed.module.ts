import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
