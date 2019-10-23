import mongoose, { Schema, Model, Document} from 'mongoose';
import { IUser } from '../interfaces/IUser'

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

export const UserModel: Model<IUser & Document> = mongoose.model<IUser & Document>('User', UserSchema);