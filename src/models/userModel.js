import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {

        _id:{
            type: mongoose.Types.ObjectId
        },
        username:{
            type:String
        },
        password:{
            type:String
        },
        admin:{
            type:Boolean

        },
        __v: {
            type:Number
        }


    }
)

export const UserModel = mongoose.model('User', UserSchema)