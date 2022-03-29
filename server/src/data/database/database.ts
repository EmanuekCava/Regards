import mongoose from "mongoose";

const { HOST, DATA } = process.env;

(async () => {

    try {

        await mongoose.connect(`mongodb://${HOST}/${DATA}`)

        console.log("Database is connected");
        
    } catch (error) {
        console.log(error);
    }

})()

