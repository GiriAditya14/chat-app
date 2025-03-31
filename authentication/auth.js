import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const auth = async(req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);     // just to look: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q1ZmMzYjk1OWNjNzM1Mzc1ODE2NjkiLCJpYXQiOjE3NDIwNzkxNjN9.AIzdyoncjYIKbGmPxZsN-6cUhezchT48XhyarjVRa5k
    
    if(!token) return res.status(401).json({error: "No token, authorization denied!"});
    try{
        const decode = jwt.verify(token, "Its_my_secret_key");
        let loginUserId = decode.userId;
        req.user = await userModel.findById(loginUserId).select("-password");
        next();
    }
    catch(err){
        return res.status(401).json({error: "Token is not valid!"});
    }

}

