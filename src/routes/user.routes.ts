//user endpoints

import {Router} from 'express';
import * as userController from "../controllers/user.controller";

const router = Router();

router.get('/', userController.list);

export default router;