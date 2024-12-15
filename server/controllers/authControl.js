const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { genrateAccessToken } = require("../helper/accessToken")
const { refreshGenrateToken } = require("../helper/refreshToken")

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


const login = async (req,res)=>{

    const {email,password} = req.body

    try {
        let user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                success:false,
                message : "please signup"
            })
        }

        const matchPassword = await bcrypt.compare(password,user.password);

        if(!matchPassword) return res.status(400).json({success:false,message:"invalid creadentials"})


            const data = {
                id : user._id
                ,accountType : user.accountType,
                author:user.username
            }

            const accessToken = genrateAccessToken(data)
            const refreshToken = refreshGenrateToken(data)

            return res.status(200).json({
                success : true,
                message : "Login successful",
                accessToken:accessToken,
                refreshToken : refreshToken,
                role : user.accountType,
                author : user.username
            })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}


module.exports = {login,signup}