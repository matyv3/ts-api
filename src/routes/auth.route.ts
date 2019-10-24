import { Router, Request, Response, NextFunction } from "express";
import Container from "typedi";

import validate from '../middlewares/validation.middleware';

import AuthController from '../controllers/auth.controller';
import { check } from "express-validator";

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);
    
    const auth = Container.get(AuthController);

    route.post('/login', [
        check('email').isEmail(),
        check('password').exists()
    ], validate, auth.login);
}