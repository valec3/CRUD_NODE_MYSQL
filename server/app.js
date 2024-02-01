import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import testRoutes from './routes/test.routes.js';
import consComplaints from './routes/ConsComplaints.routes.js';
import mysql from 'mysql';
import { configDB } from './config.js';
import myConnection from 'express-myconnection';

const app = express();

// Configurar CORS
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/test', testRoutes);
app.use('/api/report', consComplaints);

export default app;
