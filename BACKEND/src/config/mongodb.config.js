import mongoose from 'mongoose';
const connectDB = async () => {

    await mongoose.connect(process.env.ATLAS_DB_URI)
        .then(() => console.log(`MongoDB connected ${process.env.ATLAS_DB_URI}`))
        .catch(err => console.error("MongoDB connection error:", err));
}
export default connectDB;