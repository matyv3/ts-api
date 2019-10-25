import { Service } from 'typedi'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { IUserRegisterDTO } from '../interfaces/IUser';
import User from '../data/user';
import HttpException from '../exceptions/HttpException';
import { hashPassword } from '../utils/bcrypt';

@Service()
export default class UsersService {

    public async login(email: string, password: string): Promise<{ token: string, status: number }>{
        const user: any = await User.findOne({ email });
        if(!user) throw new HttpException(404, 'User not found');
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new HttpException(404, 'Invalid credentials');
        const token = jwt.sign({ email: user.email, nick: user.nick }, 'chatstorm')
        return { token, status: 200 };
    }

    public async register(userData: IUserRegisterDTO): Promise<{ msg: string, status: number }>{        
        userData.password = await hashPassword(userData.password);
        const exists = await User.exists({ email: userData.email })
        if(exists) throw new HttpException( 409 ,'Email already registered');
        try{
            await User.create(userData);        
            return { status:  201, msg: 'User Created' }
        }catch(err){
            throw new HttpException(500, 'Internal server error');
        }
            
    }
}