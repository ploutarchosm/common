export interface IAuthApi {
    userId: string;
    value: string;
    expired_at: string;
}


export enum IAuthTokenAction {
    Login = 'login',
    Register = 'register',
    ResetPassword = 'reset-password',
    Auth = 'auth',
}


export enum IAuthTokenState {
    Pending = 'PENDING',
    Failed = 'FAILED',
    Success = 'SUCCESS',
}
