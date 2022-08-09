require("dotenv").config();
import serviceAuth from './auth.service'
import bcrypt from 'bcryptjs'

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await serviceAuth.serviceLogin(email);

  if (!user) {
    return res.status(404).send('Usuário não encontrado.');
  }

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(403).send({ message: 'Senha inválida' });
  }

  const token = serviceAuth.tokenGenerate(user.id);
  res.send( {token} );
};

export = {
  controllerLogin,
};
