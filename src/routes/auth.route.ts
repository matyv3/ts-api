import { Router, Request, Response, NextFunction } from "express";
import Container from "typedi";

import validate from '../middlewares/validation.middleware';

import AuthController from '../controllers/auth.controller';
import { check } from "express-validator";

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);
    
    const auth = Container.get(AuthController);

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Login payload
     *     tags:
     *       - Auth
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         schema:
     *           type: object
     *           properties:
     *             token:
     *               type: string
     *             status:
     *               type: int
     */
    route.post('/login', [
        check('email').isEmail(),
        check('password').exists()
    ], validate, auth.login);
}