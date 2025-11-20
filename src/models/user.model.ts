import {Schema, model} from 'mongoose';

export interface IPhone {type:string; number:string}

export interface IUser extends Document {
    username: string;
    password: string;
    firstname?: string; //could either be added or not
    lastname?: string;
    email?: string; 
    //could add just one field from below
    address?:{
        area:string;
        street:string;
        number:string;
        po:string;
        municipality:string;
    },
    phone?: IPhone[];

}

const PhoneSchema = new Schema({
    type: String,
    number: String
// },{_id:false}
});

const AddressSchema = new Schema({
        area: String,
        street: String,
        number: String,
        po: String,
        municipality: String
})

const UserSchema = new Schema({
    //fields of UserSchema
    username: {type: String, required: [true, "Username is a required field"], unique: true, max:20, min:4, trim: true, lowercase: true},
    password: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, index:true},
    //one way to declare address
    // address: {
    //     area: String,
    //     street: String,
    //     number: String,
    //     po: String,
    //     municipality: String
    // },

    //alternative way to declare address
    address: [AddressSchema],

    //area type with objects
    // phone: [{
    //     type: String,
    //     number: String
    // }]

    //alternative way for phone:
    //someone may not add a phone number, it is allowed not to add one using null: true
    phone: {type:[PhoneSchema], null:true}
},
{
    collection: "users",
    timestamps: true
});

export default model("User", UserSchema); //use alias User when referring to UserSchema in other files