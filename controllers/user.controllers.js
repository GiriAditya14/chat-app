import userModel from "../models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = async(req, res) => {
    try{
        let { name, mobileNumber, password, profilePic } = req.body;
        const isExist = await userModel.findOne({mobileNumber});
        
        if(isExist) return res.status(409).json({error:"User with this mobile number already registered! Try with different number."})
        
        // before saving into database, convert password into hashed port
        let hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);        // just to look: $2b$10$Z4rYSnYpWlFTasUlZ8OKVuf6t.PU.nze4Z8fcY0mw/O1IRM7vKnR2
        
        const newUser = new userModel({name, mobileNumber, password: hashedPassword, profilePic});
        await newUser.save();
        
        res.status(200).json({
            message:"User registered successfully!",
            newUser,
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}


const cookieOptions = {     // object
    httpOnly: true,
    secure: false,          // set to true in production   
    sameSite: "Lax"
}

export const login = async(req, res) => {
    try{
        const {mobileNumber, password} =  req.body;
        const userExist = await userModel.findOne({mobileNumber});
        // console.log(userExist);     // just to look: password is hashed, so how will we compare?
        
        if(userExist && await bcrypt.compare(password, userExist.password)){
            
            const token = jwt.sign({userId: userExist._id}, "Its_my_secret_key");
            // console.log(token);     // just to look: token generated eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q1ZmMzYjk1OWNjNzM1Mzc1ODE2NjkiLCJpYXQiOjE3NDIwNzg4ODd9.T-Vu55efLrEzUkes3v261tQlAz0myEN1uQ-5Ux8PK6U
            
            // to store the token in browser (cookie)
            res.cookie("token", token, cookieOptions);       // (key, value, object)
            
            res.status(200).json({
                message: "Login successfully :)", 
                user:userExist
            })



        }
        else 
            res.status(400).json({error:"Invalid credentials :("});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}

export const searchMember = async(req, res) => {
    try{
        let {queryParam} = req.query;
        const users = await userModel.find({
            $and:[
                {_id: {$ne: req.user._id}},
                {
                    $or: [
                        {name: {$regex: new RegExp(`^${queryParam}`, 'i')}},
                        {mobileNumber: {$regex: new RegExp(`^${queryParam}`, 'i')}}
                    ]
                }
            ]
        })

        return res.status(201).json(users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server error!"});
    }
}
export const logout = async(req, res) => {
    res.clearCookie('token', cookieOptions).json({message: "logged out successfully!"});
}