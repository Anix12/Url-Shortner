import express from 'express';

import dotenv from 'dotenv';
dotenv.config()

import connectDB from './src/config/mongodb.config.js';

import short_url from './src/routes/short_url.route.js';
import auth_routes from './src/routes/auth.routes.js';
import user_routes from './src/routes/user.routes.js';


import { redirectFromShortUrl } from './src/controllers/short_url.controller.js';

import { errorHandler } from './src/utils/errorHandler.js';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
   origin: process.env.APP_URL_Frontend,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use(attachUser);
app.get('/api/ping', (req, res) => res.sendStatus(200));
app.use("/api/user", user_routes);
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Listening at port ${PORT}`);
})  


// #development trials
// APP_URL_Frontend="http://localhost:5173"
// APP_URL_Backend="http://localhost:3000"
