const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signup = async (req,res)=>{

    const {username,password,email,accountType} = req.body

    try {
        let user = await User.findOne({username})

        if(user){
            return res.status(400).json({success:false,message:"user already exists"})
        }

        const newSecurePassword = await bcrypt.hash(password,10)

        user = new User({
            username,
            password:newSecurePassword,
            email,
            accountType,
        }) 

        await user.save()

        return res.status(201).json({
            success : true,
            message : "User created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const login = async (req,res)=>{}


module.exports = {login,signup}