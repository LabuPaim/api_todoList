require("dotenv").config();
import mongoose from "mongoose"

const connectDB = () => {
  console.log('Conectando ao banco de dados...');
  mongoose
    .connect(process.env.DATABASE_URL, {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((err: string) => console.log(`Erro ao conectar com o banco: ${err}`));
};

export = connectDB;
