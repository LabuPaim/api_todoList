require("dotenv").config();
import mongoose from "mongoose"

const connectDB = () => {
  const teste: any = process.env.DATABASE_URL
  const options: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
  };
  console.log('Conectando ao banco de dados...');
  mongoose
    .connect(teste, options)
    .then(() => {console.log('MongoDB conectado!')})
    .catch((err: string) => console.log(`Erro ao conectar com o banco: ${err}`));
};

export = connectDB;
