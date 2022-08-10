import Characters from './Characters';

const serviceCreateCharacter = (
  name: string,
  stack: string,
  hardSkill: string,
  softSkill: string,
  description: string,
  imageUrl: string,
) => Characters.create({ name, stack, hardSkill, softSkill, description, imageUrl });
const serviceAllCharacters = async () => {
  const character = await Characters.find();
  return character;
};

const serviceByIdCharacter = async (id: string) => {
  const character = await Characters.findById(id);
  return character;
};

const serviceUpdateCharacter = async (id: string, characterEdited: object) => {
  const characterUpdate = await Characters.findByIdAndUpdate(id, characterEdited);
  return characterUpdate;
};

const serviceDeleteCharacter = async (id: string) => {
  return await Characters.findByIdAndDelete(id);
};

const serviceSearchByNameCharacter = async (name: string) => {
  const character = await Characters.find({ name: { $regex: `${name || ''}`, $options: 'i' } });
  console.log(character);
  return character;
};

export = {
  serviceCreateCharacter,
  serviceAllCharacters,
  serviceByIdCharacter,
  serviceUpdateCharacter,
  serviceDeleteCharacter,
  serviceSearchByNameCharacter,
};
