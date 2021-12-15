import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isLoggedInSelector } from 'src/app/auth/state/selectors';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'mc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser$:Observable<CurrentUser | undefined>
  isLoggedIn$:Observable<boolean>

  constructor(private store :Store) { }

  ngOnInit(): void {
    this.initlizeValues()
  }

  initlizeValues() : void{
    this.currentUser$=this.store.pipe(select(currentUserSelector))
    this.isLoggedIn$=this.store.pipe(select(isLoggedInSelector))
  }

}
