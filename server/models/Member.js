import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true
    },
    months:  {
        type: String,
        required: true
    },
    totalAmount:  {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    {
        timestamps: true,

    });

const Member = model("Member", userSchema);

export default Member;