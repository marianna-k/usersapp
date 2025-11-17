import Role from '../models/role.model'; //import RoleSchema using alias Role

export const findAllRoles = async() => {
  return Role.find().lean();
}