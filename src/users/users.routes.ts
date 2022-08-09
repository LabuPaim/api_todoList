import Router from 'express'
import controllerUser from './users.controller'

const router = Router.Router();

router.post('/create', controllerUser.controllerCreateUser);
router.get('/', controllerUser.controllerAllUser);
router.get('/find/:id', controllerUser.controllerByidUser);
router.put('/update/:id', controllerUser.controllerUpdateUser);

router.delete('/delete/:id', controllerUser.controllerDeleteUser);

export = router;
