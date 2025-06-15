import { findUserByUserId } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.LoginToken;
    if (!token) return next();

    try {
        const decoded = verifyToken(token);
        const user = await findUserByUserId(decoded)
        if (!user) return next();
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        next();
    }
}