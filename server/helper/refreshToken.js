const jwt = require("jsonwebtoken")

const refreshGenrateToken = (user)=>{
    jwt.sign(user,process.env.REFRESS_TOKEN_SECRET,{expiresIn:"1d"})
}

module.exports = {refreshGenrateToken}