import Router from 'express'
import swaggerUI from 'swagger-ui-express'

import swaggerDocuments from './swagger.json'

const router = Router.Router()

router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(swaggerDocuments));

export = router;
