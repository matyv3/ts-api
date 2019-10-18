import { Router } from "express";

const route = Router();

/**
 * TODO: 
 * aplicar middlewares 
 * aplicar loggers
 * ver si usar controladores que manejen el req, res
 */
export default (app: Router) => {
    app.use('/auth', route);

    route.get('/login', (req, res) => res.send('dasdsad'))
}