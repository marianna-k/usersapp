//role endpoints

import {Router} from 'express'; //only method {Router} from express library
import * as roleController from '../controllers/role.controller';

const router = Router();

//if you have a get call at the following endpoint (/api/roles) then follow a specific process
//open rolecontroller and run list from roleController
router.get('/', roleController.list);
export default router;