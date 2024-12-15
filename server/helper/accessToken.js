const jwt = require("jsonwebtoken")

const genrateAccessToken = (user)=>{
    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"})
}

module.exports = {genrateAccessToken}