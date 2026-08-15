import express from 'express'
import morgan from 'morgan'
import cors from'cors'
import authRouter from './routes/auth.routes.js';
const app=express();
app.use(express.json());
app.use(morgan('dev'))//logger
app.use(cors())
app.use(authRouter)

export default app;