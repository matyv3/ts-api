import { Service } from 'typedi'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { IUser } from '../interfaces/IUser';
import User from '../data/user';
import HttpException from '../exceptions/HttpException';

@Service()
export default class UsersService {

    public async login(email: string, password: string){
        const user: any = await User.findOne({ email });
        if(!user) throw new HttpException(404, 'User not found');
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new HttpException(404, 'Invalid credentials');
        const token = jwt.sign({ email: user.email, nick: user.nick }, 'chatstorm')
        return { token, status: 200 };
    }
}