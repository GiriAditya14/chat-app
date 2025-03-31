import express from "express";
import { register } from "../controllers/user.controllers.js";
import { login } from "../controllers/user.controllers.js";
import { auth } from "../authentication/auth.js"
import { searchMember } from "../controllers/user.controllers.js"
import { logout } from "../controllers/user.controllers.js"

const router = express.Router();


router.post("/register", register) 
router.post("/login", login) 
// router.get("/getuser", auth, function(){     // just to check
//     console.log("here"); 
// })
// router.get("/demo", auth, (req,res) => {
//     console.log(req.user);      // every detail given, but not the password
    
// })
router.get("/searchedMember", auth, searchMember)
router.post("/logout", auth, logout)


export default router;