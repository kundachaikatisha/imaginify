import { Model, Schema } from "mongoose";
import { model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    publicID: string;
    secureUrl: URL;
    width: number;
    height: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: number;
    color?: string;
    prompt?: string;
    author: {
        _id: String 
        firstName:String
        lastName: String
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema= new Schema({
    title: { type: String, required: true },
    publicID: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    config: { type: Object},
    transformationUrl: { type: URL},
    aspectRatio: { type: Number},
    color: { type: String},
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }

});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
