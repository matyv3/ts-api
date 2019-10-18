export interface IUser{
    _id: String;
    name: String;
    last_name: String;
    email: String;
    password: String;
}

export interface IUserLoginDTO{
    email: String;
    password: String;
}

export interface IUserRegisterDTO{
    name: String;
    last_name: String;
    email: String;
    password: String;
}