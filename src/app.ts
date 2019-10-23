import express, { Application, Request, Response, NextFunction  } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routes'

const app: Application = express();

// TODO: moverlo
mongoose.connect('mongodb+srv://server:server@cluster0-c41h4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected...'))
.catch((err) => console.error('Database ERROR: ', err));

app.use(function(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
        return;
    }
    next();
});  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));

app.use(routes())

app.listen(3000, () => console.log('Server running...'))