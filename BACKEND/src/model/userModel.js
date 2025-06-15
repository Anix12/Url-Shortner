import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userScheme.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
userScheme.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
});
userScheme.pre("save", async function (next) {            // before save they bcrypt password
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", userScheme);
export default User;