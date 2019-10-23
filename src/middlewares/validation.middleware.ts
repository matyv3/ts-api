// import express, { Request, Response, NextFunction } from 'express';
// import HttpException from '../exceptions/HttpException';
// import {Validator, ValidationError} from "class-validator";
 
// function validationMiddleware<T>(type: any): express.RequestHandler {
//   return (req: Request, res: Response, next: NextFunction) => {
//     let validator = new Validator();

//     return (req, res, next) => {
//       let input = deserialize(type, req.body);
  
//       let errors = validator.validateSync(input);
//       if (errors.length > 0) {
//         next(errors);
//       } else {
//         req.body = input;
//         next();
//       }
//     }
//   };
// }
 
// export default validationMiddleware;