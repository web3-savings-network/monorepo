export enum HookStatus {
  LOADING = 'LOADING',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface HookState {
  status: HookStatus;
  data?: any;
  err?: any;
  meta?: {
    msg: any;
    data?: any;
  };
}
