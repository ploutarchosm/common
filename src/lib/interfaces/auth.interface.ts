export interface IAuthApi {
    userId: string;
    value: string;
    expired_at: string;
}


export enum AuthTokenAction {
    Login = 'login',
    Register = 'register',
    ResetPassword = 'reset-password',
    Auth = 'auth',
}


export enum AuthTokenState {
    Pending = 'PENDING',
    Failed = 'FAILED',
    Success = 'SUCCESS',
}
