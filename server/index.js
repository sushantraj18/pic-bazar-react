// 4 steps to make server 

// 1 call express in this file
const express = require("express")
const dotenv = require('dotenv')

// binding env 
dotenv.config()



// 2 call express in a variable
const app = express()

// 3 define port 
const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("<h1>Radhey radhey </h1>")
})

// 4 listen server 
app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})
