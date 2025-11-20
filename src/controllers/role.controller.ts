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

export const create = async(req:Request, res:Response, next:NextFunction) => {
  try {
    // console.log(">>", req.body);
    const result = await roleService.createRole(req.body);
    res.status(201).json(result);
  } catch(err) {
    res.status(401).json({"Error": err});
    // next(err)
  }
}

export const update = async(req:Request, res:Response, next: NextFunction) => {
  try{
    const result = await roleService.updateRole(req.params.id || '', req.body); //if req.params doesn't exist then add an empty string (can be also declared as (req.params.id!, req.body))
    res.status(201).json(result);
  }catch(e){
    res.status(401).json({"Error": e});
  }
}

export const remove = async(req:Request, res:Response, next: NextFunction) =>{
  try{
      const result = await roleService.deleteRole(req.params.id!);
       res.status(200).json(result);
  }
  catch(e){
    res.status(401).json({"Error": e});
  }
}