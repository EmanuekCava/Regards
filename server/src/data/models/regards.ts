import { Schema, model, Document, Types } from "mongoose";

const { ObjectId } = Types;

export interface Reg extends Document {
    title: string;
    description: string;
}

const regardsSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    images: [Object],
    user: {
        type: ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<Reg>("Regard", regardsSchema)