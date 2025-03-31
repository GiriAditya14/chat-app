import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema(
    {
        members: [
            {
            type: Schema.Types.ObjectId,
            ref: "User",
            },
        ],
    },
    { timestamps: true }
)


const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation