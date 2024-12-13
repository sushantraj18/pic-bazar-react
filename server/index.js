// 4 steps to make server 

// 1 call express in this file
const express = require("express")
const dotenv = require('dotenv')
const {readdirSync} = require("fs")
const { connectDb } = require("./connection")

// binding env 
dotenv.config()


// calling route
// const authRoute = require("./routes/authRoutes")

// 2 call express in a variable
const app = express()

// 3 define port 
const PORT = process.env.PORT || 5000
connectDb()

app.get("/",(req,res)=>{
    res.send("<h1>Radhey radhey </h1>")
})

// app.use("/api",authRoute)

// calling routes dynamcally 

readdirSync("./routes").map((route)=> app.use("/api",require(`./routes/${route}`)))

// console.log(readdirSync("./routes"))

// 4 listen server 
app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})
