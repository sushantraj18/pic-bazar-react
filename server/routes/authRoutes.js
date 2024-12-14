
// this is normal way to call 
// const express = require("express")
// const route = express.Router()

const { login, signup } = require('../controllers/authControl')


const route = require('express').Router()

route.post('/login',login)
route.post('/signup',signup)


// route.post("/new",(req,res)=>{
//     res.json({
//         message : "acount created",name:"sushant raj"
//     })
// })


module.exports = route