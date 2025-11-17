import {Request, Response, NextFunction} from 'express';
import * as roleService from '../services/role.service';

export const list = async(req:Request, res:Response, next: NextFunction) =>{
    try{
        //find all roles
        const result = await roleService.findAllRoles(); //from roles.service file call all roles and then proceed to the following code
        res.status(200).json(result); //send a status 200 and the roles

    }catch(e){
        next(e);

    }
}