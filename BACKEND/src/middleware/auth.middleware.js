import { findUserByUserId } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) throw res.status(401).json({ message: "Unauthorized User" })

    try {
        const decoded = await verifyToken(token); //decoded=userId
        const user = await findUserByUserId(decoded);
        if (!user) return res.status(401).json({ message: "Unauthorized User" });
        req.user = user;
        next();
    } catch (e) {
        return res.status(401).json({ message: "Unauthorized User" });
    }
}