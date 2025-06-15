import shortUrl from '../model/shorturlModel.js';
import User from '../model/userModel.js';

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}
export const findUserByEmailAndPassword = async (email) => {
    return await User.findOne({ email }).select('+password')
}
export const findUserByUserId = async (id) => {
    return await User.findById(id);
}

export const createUser = async (name, email, password) => {
    const newUser = new User({ name, email, password });
    await newUser.save()
    return newUser;
}
export const getCustomShortUrl = async (customUrl) => {
    return shortUrl.findOne({ short_url: customUrl })
}
export const getAllUserUrlsDao = async (id) => {
    // Return all shortUrl documents created by this user
    return await shortUrl.find({ user: id });
}