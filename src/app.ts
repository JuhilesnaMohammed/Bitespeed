import express from 'express';
import bodyParser from 'body-parser';
import identifyRouter from './routes/contactRoutes';

const app = express();

app.use(bodyParser.json());

app.use(identifyRouter);

export default app;
