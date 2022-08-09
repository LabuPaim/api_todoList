import User from './User'

const serviceAllEmail = (email: string) => User.findOne({ email: email });
const serviceCreateUser = (user: object) => User.create(user);

const serviceAllUser = async () => {
  const user = await User.find();
  return user;
};
const serviceByidUser = async (id: string) => {
  const user = await User.findById(id);
  return user;
};
const serviceUpdateUser = async (id: string, user__EDITED: object) => {
  
  const userUpdate = await User.findByIdAndUpdate(id, user__EDITED);
  return userUpdate;
};
const serviceDeleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

export = {
  serviceAllEmail,
  serviceCreateUser,
  serviceAllUser,
  serviceByidUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
