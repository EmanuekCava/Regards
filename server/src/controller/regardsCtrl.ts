import fs from 'fs-extra'

import Regard from '../data/models/regards'

import { cloud } from '../helper/cloudinary'

export const allRegards = async (req: any, res: any) => {

    try {

        const regards = await Regard.find()

        res.json({
            regards,
            result: regards.length
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const regards = async (req: any, res: any) => {

    try {

        const regards = await Regard.find({ user: req.user })

        res.json({
            regards,
            result: regards.length
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createRegards = async (req: any, res: any) => {

    const { title, description } = req.body;

    var listImages: Array<object> = [];
    const files = req.files;

    if(!title) {
        return res.status(500).json({ message: "You must write a title." })
    }

    if(description.length > 30) {
        return res.status(500).json({ message: "The description must be less than 31 characters." })
    }

    if(!req.files) {
        return res.status(500).json({ message: "You must upload at least 1 image." })
    }

    const uploadImage = async (path: any) => {
        let result = await cloud.uploader.upload(path)

        var file = {
            imageId: result.public_id,
            image: result.url,
            imageFormat: result.format,
            imageSize: result.bytes
        }

        listImages.push(file)
    }

    try {

        for(let file of files)  {

            await uploadImage(file.path)

            await fs.unlink(file.path)
        }

        const newRegard = new Regard({
            title,
            description,
            images: listImages,
            user: req.user
        })

        const saveRegard = await newRegard.save();
        
        res.json({
            regard: saveRegard,
            message: "Regard created sucesfully."
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeRegards = async (req: any, res: any) => {

    const { id } = req.params;

    const imageRemove = async (regard: any) => {
        await cloud.uploader.destroy(regard?.imageId!)
    }

    try {

        const user = await Regard.findOne({ user: req.user, _id: id })

        if(user) {
            return res.status(401).json("User not allowed")
        }

        const removeRegard: any = await Regard.findById(id)

        for(var file of removeRegard.images) {

            await imageRemove(file)

        }

        await Regard.findByIdAndDelete(id)
        
        return res.json("Regard removed succesfully.")

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const getRegards = async (req: any, res: any) => {

    const { id } = req.params;

    try {

        const regard = await Regard.findById(id)

        res.json(regard)

    } catch (error: any) {
        return res.status(500).message({ message: error.message })
    }

}

export const updateRegards = async (req: any, res: any) => {

    const { title, description } = req.body;
    const { id } = req.params;

    try {

        

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const searchRegard = async (req: any, res: any) => {

    const { title } = req.query;

    try {

        const regard = await Regard.find({ user: req.user, title: {
            $regex: title
        }}).limit(8).select("title")

        res.json({regard})
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}
