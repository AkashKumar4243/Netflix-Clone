import { Router } from "express";
import Users from "../Models/Users.js";
import bcrypt from 'bcrypt'

const api = Router();

api.post('/register', async (req,res) => {

    const pass = req.body.password

        const hashedPassword = await bcrypt.hash(pass,12);
        
        const newUSer = new Users ({
            username  : req.body.username,
            email : req.body.email,
            password : hashedPassword
        })
    console.log(newUSer);

    try {
        const user = await newUSer.save();
        res.status(201).json(user);
    } catch (error) {
        console.log(error)
    }
})

export default api;