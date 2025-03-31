import conversationModel from "../models/conversation.models.js";

export const addConversation = async(req, res) => {
    try{
        let senderId = req.user._id;
        let {receiverId} = req.body;

        let newConversation = new conversationModel({
            members: [senderId, receiverId]
        })
        await newConversation.save();

        res.status(200).json({
            message: "Added successfully!",
            conversation: newConversation
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}


export const getConversation = async (req, res) => {
    try{
        let loggedIn = req.user._id;
        let conversations = await conversationModel.find({
            members: {$in: [loggedIn]}
        }).populate("members", "-password");
        res.status(200).json({
            message: "Fetched successfully!",
            conversations
        }) 
    }       
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}