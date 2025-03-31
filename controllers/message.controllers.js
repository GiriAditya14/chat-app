import messageModel from "../models/message.models.js"

export const sendMessage = async(req, res) => {
    try{
       let {conversation, content} = req.body;
       let addMessage = new messageModel({sender: req.user._id, conversation, message: content});
       await addMessage.save();

       let populatedMessage = await addMessage.populate("sender");

       res.status(201).json(populatedMessage);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}

export const getMessage = async(req, res) => {
    try{
        let {convId} = req.params;
        let message = await messageModel.find({
            conversation: convId
        }).populate("sender")

        res.status(200).json({ messages: "Fetched message successfully!", message});

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}