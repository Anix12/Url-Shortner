import { cookiesOption } from "../config/config.js";

import { loginUser, registerUser } from "../services/auth.service.js";

import wrapAsync from "../utils/tryCatch.js"

export const register_user = wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const token = await registerUser(name, email, password);
    res.cookie("accessToken", token, cookiesOption);
    res.status(200).json({ message: "sign up Sucessfully" });
})

export const login_user = wrapAsync(async (req, res) => {
    const { email, password } = req.body
    const { token, user } = await loginUser(email, password); //user=token
    req.user = user
    res.cookie("accessToken", token, cookiesOption)
    res.status(200).json({ user: user, message: "Login sucessfully" });
})

export const get_current_user = wrapAsync(async (req, res) => {
    res.status(200).json({ user: req.user , message: "Current user fetched successfully" });
})

