import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer'
import { google } from "googleapis";

import User, { Usuario } from '../data/models/users'

export const register = async (req: any, res: any) => {

    const { username, email, password } = req.body;

    try {

        const newUser: Usuario = new User({
            username,
            email,
            password
        })

        newUser.password = await newUser.matchPassword(newUser.password)

        const token: string = jwt.sign({ id: newUser._id }, `${process.env.JWT}`, {
            expiresIn: "24h"
        })

        const userSaved = await newUser.save()

        // sendEMail()
        // .then((res) => {
        //     res.status(200).json("Send Email")
        // })
        // .catch(err => console.log(err))

        res.status(200).json({
            token: token,
            user: userSaved
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req: any, res: any) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(500).json({ message: "The email does not exists." })
        }

        const validate: boolean = await bcrypt.compare(password, user.password)

        if (!validate) {
            return res.status(500).json({ message: "The credentials do not match." })
        }

        const token: string = jwt.sign({ id: user._id }, `${process.env.JWT}`, {
            expiresIn: "24h",  
        })

        res.status(200).json({
            token: token,
            user: user
        })

    } catch (error: any) {
        return res.status(500).message({ message: error.message })
    }

}

export const allUsers = async (req: any, res: any) => {

    try {

        const users = await User.find().select("-password")

        res.json(users)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeUsers = async (req: any, res: any) => {

    const { id } = req.params;

    try {

        await User.findByIdAndDelete(id)

        res.json("User removed.")

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}