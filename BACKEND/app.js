import express from 'express';

import connectDB from './src/config/mongodb.config.js';

import dotenv from 'dotenv';
dotenv.config()

import short_url from './src/routes/short_url.route.js';
import auth_routes from './src/routes/auth.routes.js';
import user_routes from './src/routes/user.routes.js';


import { redirectFromShortUrl } from './src/controllers/short_url.controller.js';

import { errorHandler } from './src/utils/errorHandler.js';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use(attachUser);

app.use("/api/user", user_routes);
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url);
app.use("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
    connectDB();
    console.log("Server is Listening at port 3000");
})  