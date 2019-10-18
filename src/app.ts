import express, { Application } from 'express';

import routes from './routes'

const app: Application = express();

app.use(routes())

app.listen(4000, () => console.log('Server running...'))