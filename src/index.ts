require('dotenv').config();
import express from 'express';
import cors from 'cors';
import db from './db/database';
import userRouter from './users/users.routes';
import authRouter from './auth/auth.routes';
// const character__ROUTE = require('./characters/characters.routes');
import swaggerRouter from './swagger/swagger.routes'

const port = process.env.PORT || 3000;

const app = express();

db();

app.use(cors());

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
// app.use('/characters', character__ROUTE);
app.use('/api-docs', swaggerRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
