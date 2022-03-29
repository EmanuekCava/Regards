import { NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface validationToken {
    id: string;
    iat: number;
}

const auth = async (req: any, res: any, next: NextFunction) => {

    try {

        const token = req.headers.authorization.split(" ")[1]

        if(!token) {
            return res.status(401).json("Token does not exist.")
        }

        const validation = jwt.verify(token, `${process.env.JWT}`) as validationToken

        if(!validation) {
            return res.status("Token malformed.")
        }

        req.user = validation.id;

        if(!req.user) {
            return res.status(401).json("The user does not exists.")
        }

        next();
        
    } catch (error) {
        console.log(error)
    }

}

export default auth