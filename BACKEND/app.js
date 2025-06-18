import express from 'express';
const PORT = process.env.PORT || 3000;

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

const allowedOrigins = [
  process.env.APP_URL_Frontend,
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

// app.use(cors({
//    // origin: "http://localhost:5173",
//     origin: FrontendURL,
//     credentials: true
// }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use(attachUser);

app.use("/api/user", user_routes);
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Listening at port ${PORT}`);
})  