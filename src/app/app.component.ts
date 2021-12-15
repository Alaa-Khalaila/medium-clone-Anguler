import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/services/auth.service';
import { getCurrentUserAction } from './auth/state/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor( private stroe : Store){}

  ngOnInit(): void {
    this.stroe.dispatch(getCurrentUserAction())
  }
}
