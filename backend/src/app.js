import express from 'express'
import morgan from 'morgan'
import cors from'cors'
import authRouter from './routes/auth.routes';
const app=express();
app.use(express.json());
app.use(cors())
app.use(authRouter)
app.use(morgan('dev'))//logger
export default app;