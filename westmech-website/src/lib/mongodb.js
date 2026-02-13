import mongoose from "mongoose";

// mongodb connection
const connectMongoDB = () => {
    try {
        console.log("entering")
        mongoose.connect(process.env.MONGODB_URI);
        console.log("success")
    } catch (error) {
        console.log("sad")
        console.error(error);
    }
};

export default connectMongoDB;
