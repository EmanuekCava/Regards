
import { NextFunction } from "express";

const validLogin = async (req: any, res: any, next: NextFunction) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {
            return res.status(500).json({ message: "There are incomplet credentials." })
        }

        next();

    } catch (error) {
        console.log(error);
    }

}

export default validLogin