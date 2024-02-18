import { Router } from "express";
import Users from "../Models/Users.js";
import bcrypt from "bcrypt";
import verify from "../verifyToken.js"

const userRoute = Router();

//UPDATE 
userRoute.put('/:id', verify, async (req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) { 
        if(req.body.password) {
            const hashedPassword = bcrypt.hash(req.body.password,10);
            req.body.password = (await hashedPassword).toString();
        }

        try {
            const updatedUser = await Users.findByIdAndUpdate(req.params.id,{
                $set : req.body
            },{new : true}                  // if new true is not used then update will be only in database now it will also display in postman display
            );
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json({Error : "You can update only your credentials"});
    }
})

//DELETE 

userRoute.delete('/:id',verify, async (req,res) => {
    if(req.params.id === req.user.id || req.user.isAdmin) {
        try {
            await Users.findByIdAndDelete(req.params.id);
            res.status(200).json({Error : "User Deleted Succesfully"})
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json({Error : "You can delete only your account"});
    }
})

userRoute.get('/find/:id', async (req,res) => {
    try {
        const user = await Users.findById(req.params.id);
        const {password,...info}  = user._doc;
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
});

userRoute.get('/', verify, async (req,res) => {
    const query = req.query.new;                //  /?new=true
    if(req.user.isAdmin) {
        try {
            const users = query ? await Users.find().sort({id : -1}).limit(10) : await Users.find();

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json({Error : "You are not allowed to see all the users "})
    }
})


export default userRoute;