import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined");
}

const MONGO_URI: string = process.env.MONGO_URI;

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI);
        if (connection.readyState == 1) {
            console.log('Database Connected');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;