import mongoose from "mongoose";

// mongodb connection
const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error(error);
    }
};

export default connectMongoDB;
