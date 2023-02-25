import mongoose from "mongoose";
import colors from "colors";

mongoose.set('strictQuery', false);

const connectMongoDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to Mongodb database ${connect.connection.host}`.bgMagenta.white);
    } catch (err)
    {
        console.log(`Error in connecting Mongodb ${err}`.bgRed.white);
    }
};

export default connectMongoDb;  