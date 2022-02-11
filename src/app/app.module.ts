import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffectimplements } from './auth/state/effects/register.effect';
import { LoginEffectImplements } from './auth/state/effects/login.effect';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { GetCurrentUserImplements } from './auth/state/effects/getCurrentUser.effect';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { GetFeedImplements } from './shared/modules/feed/state/effects/getFeed.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    NavbarModule,
    GlobalFeedModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      RegisterEffectimplements,
      LoginEffectImplements,
      GetCurrentUserImplements,
      GetFeedImplements
    ]),
  ],
  providers: [
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
