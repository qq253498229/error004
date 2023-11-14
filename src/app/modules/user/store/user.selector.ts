import { Selector } from '@ngxs/store';
import { UserState, UserStateModel } from './user.state';

export class UserSelector {
  @Selector([UserState])
  static list({list}: UserStateModel) {
    return list;
  }
}
