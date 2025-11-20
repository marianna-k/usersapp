//role endpoints

import {Router} from 'express'; //only method {Router} from express library
import * as roleController from '../controllers/role.controller';

const router = Router();

//if you have a get call at the following endpoint (/api/roles) then follow a specific process
//open rolecontroller and run list from roleController
router.get('/', roleController.list);
router.post('/', roleController.create); //calls another controller create

router.put('/:id', roleController.update); //path parameter: localhost:3000/api/roles/691c9484287bff1a2aa664e1 (id num)

//delete a role
router.delete('/:id', roleController.remove); //localhost:3000/api/roles/691c9484287bff1a2aa664e1
export default router;