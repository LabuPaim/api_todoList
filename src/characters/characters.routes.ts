const router = require('express').Router();
import character__CONTROLLER from './characters.controller';


router.post('/create', character__CONTROLLER.controllerCreateCharacter);
router.get('/', character__CONTROLLER.controllerAllCharacters);
router.get('/find/:id', character__CONTROLLER.controllerByidCharacter);
router.put('/update/:id', character__CONTROLLER.controllerByidCharacter);
router.delete('/delete/:id', character__CONTROLLER.controllerDeleteCharacter);
router.get('/search', character__CONTROLLER.controllerSearchByNameCharacter);

export = router;
