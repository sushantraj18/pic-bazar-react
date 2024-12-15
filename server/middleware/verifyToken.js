const jwt = require("jsonwebtoken")

const verifyToken = async (req,res,next)=>{
    const authHeader = req.header("Authorization")

    const token = authHeader && authHeader.split(" ")[1]

    if(!token)return res.status(400).json({success:false,message:"Unauthorized"})

    try {
        
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(er,user)=>{


            if(er)
                return res.status(403).json({success:false,message:"Forbidden"})
            

            req.id = user.id
            req.author = user.username
            req.accountType = user.accountType

            next()
        })

    } catch (error) {
        return res.status(500).json({
            success :false,
            message : "Internal server error"
        })
        
    }
}