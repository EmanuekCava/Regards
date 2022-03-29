import { Schema, model, Document, Types } from "mongoose";
import { genSalt, hash } from "bcryptjs";

const { ObjectId } = Types;

export interface Usuario extends Document {
    username: string;
    email: string;
    password: string;
    matchPassword(password: string): Promise<string>;
}

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.methods.matchPassword = async (password: string): Promise<String> => {
    
    const salt = await genSalt(8);
    return await hash(password, salt);

}

export default model<Usuario>("User", userSchema)