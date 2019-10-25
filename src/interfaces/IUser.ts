export interface IUser{
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface IUserLoginDTO{
    email: string;
    password: string;
}

export interface IUserRegisterDTO{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}