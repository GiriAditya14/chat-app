import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY53_Ah8l-bGTQqVZVurxf-5N2F0Bi1omug&s",
        },
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema);
export default User