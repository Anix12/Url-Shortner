import mongoose from "mongoose";

const shorturlSchema = new mongoose.Schema({
    long_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        index: true,        //seperates faster to search in big file cabinate    
        unique: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});
const shortUrl =  mongoose.models.shortUrl || mongoose.model("shortUrl", shorturlSchema);

export default shortUrl;