import { Request, Response } from 'express';
import serviceUser from './users.service'
import serviceAuth from '../auth/auth.service'
import { NextFunction } from 'express';

const controllerCreateUser = async (req: Request, res: Response, next) => {
  const { name, username, email, password, avatar } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).send({ message: 'Alguns campos estão faltando.' });
  }

  const userFind = await serviceUser.serviceAllEmail(email);
  if (userFind) {
    return res.status(400).send({ message: 'Usuário já existe.' });
  }

  const user = await serviceUser
    .serviceCreateUser(req.body)
    .catch((err) => console.log(err.message));
  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário.' });

  }

  const token = serviceAuth.tokenGenerate(user.id);
  res.status(201).send({ user: { id: user.id, name, username, email, avatar }, token });
};

const controllerAllUser = async (req: Request, res: Response, next) => {
  
  const usersAll = await serviceUser.serviceAllUser();
  if (usersAll.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma usuário cadastrado' });
  }
  res.send(usersAll);
};
const controllerByidUser = async (req: Request, res: Response, next) => {
  const paramID = req.params.id;
  const selectUser = await serviceUser.serviceByidUser(paramID);
  if (!selectUser) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send(selectUser);
};
const controllerUpdateUser = async (req: Request, res: Response, next) => {
  const paramID = req.params.id;
  const userEdited = req.body;
  const userUpdate = await serviceUser.serviceUpdateUser(paramID, userEdited);
  res.send(userUpdate);
};
const controllerDeleteUser = async (req: Request, res: Response, next) => {
  const paramID = req.params.id;
  await serviceUser.serviceDeleteUser(paramID);
  res.send({ message: 'Usuário deletado com sucesso!' });
};

export = {
  controllerCreateUser,
  controllerAllUser,
  controllerByidUser,
  controllerUpdateUser,
  controllerDeleteUser,
};
