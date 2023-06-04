import mongoose from "mongoose";

const {Schema} = mongoose

const postSchema = new Schema({
        title:{
            type: String,
            unique: true,
            required: true
        },
        desc:{
            type: String,
            unique: true,
            required: true
        },
        img:{
            type: String,
            unique: true,
            required: true
        },
        content:{
            type: String,
            unique: true,
            required: true
        },
        username:{
            type: String,
            required: true
        },
    },{timestamps: true}

)

export default mongoose.model('User', postSchema)