import jwt from 'jsonwebtoken'

const isLoggedIn = async (req,res) => {

    try {

        const token = await req.body.token;
        // const token = await req.cookies.jwt;

        if(!token){
            return res.status(201).json({
                msg: "Unauthorized - No Token Provided"
            })
        }
        
        const {userId} = await jwt.verify(token,process.env.JWT_TOKEN);
        if(!userId){
            return res.status(201).json({
                msg: "Unauthorized - No Token Provided"
            })
        }

        const user = await validUser.findOne({
            _id: userId
        })
        
        if(!user){
            return res.status(201).json({
                msg: "Unauthorized - No Token Provided"
            })
        }

        res.status(200).json({
            msg: "User getted"
        })


    } catch (error) {
        console.log("Error occure in the protectRoutes.js ====> " + error.message)
    }
}

export default isLoggedIn
