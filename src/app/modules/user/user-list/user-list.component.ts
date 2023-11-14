import { Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';
import { UserSelector } from '../store/user.selector';
import { Store } from '@ngxs/store';
import { UserAction } from '../store/user.action';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @AutoUnsubscribe() userList$ = this.store.select(UserSelector.list);

  constructor(
      private store: Store,
  ) {
  }

  ngOnInit() {
    console.log('user list init isDevMode', isDevMode());
  }

  create() {
    this.store.dispatch(new UserAction.OpenModal());
  }
}
