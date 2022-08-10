import 'dotenv/config';
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import db from './db/database';
import characterRoute from './characters/characters.routes';
import swaggerRouter from './swagger/swagger.routes'

const port = process.env.PORT || 3001;
const app = express();
db();

app.use(cors());
app.use(express.json());

app.use('/characters', characterRoute);
app.use('/api-docs', swaggerRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
