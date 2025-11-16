import {Schema, model} from 'mongoose'; //CRUDE commands

//fields that will be added: role, description, active
//no other fields are allowed to be added
const RoleSchema = new Schema({
    role: {type: String, required: true, unique:true},
    description:{type: String},
    active: {type: Boolean, default: true}
    },
    {
        collection: "roles",
        timestamps: true
    }
);

export default model("role", RoleSchema); //using alias role when referring to RoleSchema in other ts files