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
     * /auth/login:
     *   post:
     *     summary: Login payload
     *     tags:
     *     - Auth
     *     consumes:
     *     - "application/json"
     *     produces:
     *     - "application/json"
     *     parameters:
     *     - in: "body"
     *     name: "body"
     *     schema:
     *          type: "object"
     *          required:
     *          - "email"
     *          - "password"
     *          properties:
     *              email:
     *                  type: "string"
     *              pasword:
     *                  type: "string"
     *     responses:
     *       200:
     *         schema:
     *           type: object
     *           properties:
     *             token:
     *               type: "string"
     *             status:
     *               type: integer
     */
    route.post('/login', [
        check('email').isEmail(),
        check('password').exists()
    ], validate, auth.login);


    route.post('/register', [
        check('email').isEmail(),
        check('password').exists(),
        check('first_name').exists(),
        check('last_name').exists()
    ], validate, auth.register);
}