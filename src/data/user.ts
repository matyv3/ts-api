import { UserModel } from '../models/user.model';
import { IUserRegisterDTO, IUser } from '../interfaces/IUser';

export default class User{

    constructor(){}

    public static async findOne(params: any){
        return await UserModel.findOne({...params});
    }

    public static async create(params: IUserRegisterDTO){
        return await UserModel.create({ ...params })
    }

    public static async exists(params: any): Promise<boolean>{
        const count = await UserModel.countDocuments({ ...params })
        return count > 0;       
    }
}