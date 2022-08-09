import Router from "express"

import controllerAuth from "./auth.controller"

const router = Router.Router();

router.post("/login", controllerAuth.controllerLogin);

export = router;
