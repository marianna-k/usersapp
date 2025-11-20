import Role, {IRole} from '../models/role.model'; //import RoleSchema using alias Role

export const findAllRoles = async() => {
  return Role.find().lean();
}

//req.body "payload" of type Object (specifically IRole) that is called in role.controlers
//from req.body will receive a request with specific fields. role,decription and active
//if it doesn't have the IRole format, then an error message will be shown
//Partial<IRole> refers to elements that may not all exist. some elements can be added
//Required<IRole> all elements need to be added
export const createRole = async(payload: Partial<IRole>) => {
  const result = new Role(payload);
  return result.save();
}

export const updateRole = async(id:string, payload: Partial<IRole>) => {
  return Role.findByIdAndUpdate(id, payload, {new: true}); //in case that this document doesn't exist, then create it {new:true}
}

export const deleteRole = async(id:string) => {
  return Role.findByIdAndDelete(id); //in case that this document doesn't exist, then create it {new:true}
}