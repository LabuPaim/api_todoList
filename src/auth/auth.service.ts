require("dotenv").config();
import User from '../users/User'
import jwt from "jsonwebtoken"

const tokenGenerate = (userId: string) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: "24h" });

const serviceLogin = (email: string) => User.findOne({email: email}).select('+password')

export = {
  serviceLogin,
  tokenGenerate
};
