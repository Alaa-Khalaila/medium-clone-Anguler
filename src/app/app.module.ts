import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffectimplements } from './auth/state/effects/register.effect';
import { LoginEffectImplements } from './auth/state/effects/login.effect';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { GetCurrentUserImplements } from './auth/state/effects/getCurrentUser.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    NavbarModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([RegisterEffectimplements,LoginEffectImplements,GetCurrentUserImplements]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
