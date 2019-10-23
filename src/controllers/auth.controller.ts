import { Request, Response, NextFunction } from 'express';
import { Container, Service } from 'typedi';
import HttpException from '../exceptions/HttpException'

import UsersService from '../services/users.service';

const usersService: UsersService = Container.get(UsersService)    

@Service()
export default class AuthController{
    
    public async login(req: Request, res: Response){
        const { email, password } = req.body;
        try{
            const result = await usersService.login(email, password);
            res.json(result);
            return
        }catch(err){
            return res.status(err.status).json({ status: err.status, error: err.message });
        }
    }

    public async register(req: Request, res: Response){
        
        
    }
} 