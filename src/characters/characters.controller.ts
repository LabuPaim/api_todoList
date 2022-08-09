import serviceCharacters from './characters.service';

const controllerCreateCharacter = async (req:any, res: any, next:any) => {
  try {
    const { name, imageUrl } = req.body;

    const { id } = await serviceCharacters.serviceCreateCharacter(
      name,
      imageUrl,
    );

    res.status(201).send({
      message: 'created',
      characters: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const controllerAllCharacters = async (req:any, res: any, next:any) => {
  const characterAll = await serviceCharacters.serviceAllCharacters();
  if (characterAll.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma Character cadastrado' });
  }

  res.send({
    results: characterAll.map((character) => ({
      id: character.id,
      name: character.name,
      imageUrl: character.imageUrl,
    })),
    total: characterAll.length,
  });
};

const controllerByidCharacter = async (req:any, res: any, next:any) => {
  const paramID = req.json()
  const selectCharacter = await serviceCharacters.serviceByIdCharacter(paramID);
  if (!selectCharacter) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send(selectCharacter);
};

const controllerUpdateCharacter = async (req:any, res: any, next:any) => {
  const paramID: string = req.params.id;
  const characterEdited: object = req.body;
  const characterUpdate = await serviceCharacters.serviceUpdateCharacter(
    paramID,
    characterEdited,
  );
  res.send(characterUpdate);
};

const controllerDeleteCharacter = async (req:any, res: any, next:any) => {
  const paramID = req.params.id;
  await serviceCharacters.serviceDeleteCharacter(paramID);
  res.send({ message: 'Usuário deletado com sucesso!' });
};

const controllerSearchByNameCharacter = async (req:any, res: any, next:any) => {
  const param__NAME = req.query.name;
  const selectCharacter = await serviceCharacters.serviceSearchByNameCharacter(param__NAME);
  console.log(selectCharacter);
  if (!selectCharacter) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send({
    characters: selectCharacter.map((character) => ({
      id: character.id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    })),
    total: selectCharacter.length,
  });
};

export = {
  controllerCreateCharacter,
  controllerAllCharacters,
  controllerByidCharacter,
  controllerUpdateCharacter,
  controllerDeleteCharacter,
  controllerSearchByNameCharacter,
};
