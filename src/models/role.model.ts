import {Schema, model, Document} from 'mongoose'; //CRUDE commands

//interface for object Role
//extends Document: refers to the elements i'm about to save, they will be of the specified format. Inherits properties of documents in mongodb
export interface IRole extends Document{
    role: string;
    description?: string; //it can take a value or not (?). if it has a value then it'll be a string
    active: boolean;

}



//fields that will be added: role, description, active
//no other fields are allowed to be added
const RoleSchema = new Schema<IRole>({
  role: { type: String, required: true, unique:true },
  description: { type: String },
  active: { type: Boolean, default: true }
}, {
  collection: "roles",
  timestamps: true
});


export default model<IRole>("Role", RoleSchema); //using alias role when referring to RoleSchema in other ts files