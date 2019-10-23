import { Router } from "express";
import Container from "typedi";

import AuthController from '../controllers/auth.controller';

const route = Router();

/**
 * TODO: 
 * aplicar middlewares 
 * aplicar loggers
 * ver si usar controladores que manejen el req, res
 */
export default (app: Router) => {
    app.use('/auth', route);
    
    const auth = Container.get(AuthController);
    
    route.post('/login', auth.login);
}