export namespace UserAction {
  export class LoadList {
    static readonly type = `加载用户列表`;
  }

  export class OpenModal {
    static readonly type = `打开编辑框`;

    constructor(public data?: any) {
    }
  }

  export class SaveModal {
    static readonly type = `保存编辑框`;
  }

  export class CloseEditModal {
    static readonly type = `关闭编辑框`;
  }
}
