import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

//JWT_SECRET = "8a17720e27f584166bdc2f8b44b77a75e1b2fb9b15b88b65631934de4d7af885"

const auth = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message: "Acesso negado!"})
    }

    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userID = decoded.id

    } catch (err) {
        return res.status(401).json({message: "Token inválido!"})
    }

    next()
}

export default auth