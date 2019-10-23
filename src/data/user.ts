import { UserModel } from '../models/user.model';

export default class User{

    constructor(){}

    public static async findOne(params: any){
        return await UserModel.findOne({...params});
    }
}