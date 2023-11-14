import { Injectable } from '@angular/core';
import { Action, NgxsAfterBootstrap, State, StateContext } from '@ngxs/store';
import { UserAction } from './user.action';
import { ResetForm } from '@ngxs/form-plugin';
import { tap } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';

export interface UserStateModel {
  list: any;
  editForm: any;
  editFormFlag: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    list: [],
    editForm: {},
    editFormFlag: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class UserState implements NgxsAfterBootstrap {

  constructor(private modal: NzModalService) {
  }

  ngxsAfterBootstrap(ctx: StateContext<any>): void {
    ctx.patchState({editFormFlag: false});
  }

  @Action(UserAction.OpenModal)
  OpenModal(ctx: StateContext<UserStateModel>, {data}: UserAction.OpenModal) {
    return ctx.dispatch(new ResetForm({path: 'user.editForm'})).pipe(tap(() => {
      ctx.patchState({editFormFlag: true});
      let modalRef: any = this.modal.create({
        nzTitle: data ? '编辑' : '创建',
        nzContent: UserEditFormComponent,
        nzMaskClosable: false,
        nzFooter: [
          {
            type: 'primary',
            label: '确定',
            disabled: i => i ? (i.validateForm.invalid || !i.validateForm.dirty) : true,
            onClick: () => ctx.dispatch(new UserAction.SaveModal()),
          },
          {type: 'default', label: '取消', onClick: () => modalRef.triggerCancel()},
        ],
        nzOnCancel: () => ctx.dispatch(new UserAction.CloseEditModal()),
      });
    }));
  }

  @Action(UserAction.SaveModal)
  SaveModal(ctx: StateContext<UserStateModel>) {
    let state = ctx.getState();
    console.log('SaveModal', state.editForm);
  }

  @Action(UserAction.CloseEditModal)
  CloseEditModal(ctx: StateContext<UserStateModel>) {
    ctx.patchState({editFormFlag: false});
  }
}
