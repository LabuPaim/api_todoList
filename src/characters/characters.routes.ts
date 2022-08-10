const router = require('express').Router();
import characterControllers from './characters.controller';


router.post('/create', characterControllers.controllerCreateCharacter);
router.get('/', characterControllers.controllerAllCharacters);
router.get('/:id', characterControllers.controllerByidCharacter);
router.put('/update/:id', characterControllers.controllerUpdateCharacter);
router.delete('/delete/:id', characterControllers.controllerDeleteCharacter);
router.get('/search', characterControllers.controllerSearchByNameCharacter);

export = router;
