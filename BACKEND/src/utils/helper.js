import { nanoid } from "nanoid"
import jsonwebtoken from 'jsonwebtoken'
import axios from 'axios';

export const generateNanoId = (length) => {
    return nanoid(length);
}

export const signToken = (payload) => { //payload = we provide any Id here at that time i provide mongoId 
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

export const verifyToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return decoded.id; //this id under user._id comes because we verify 
}

export const getHTML = async (url) => {
  const response = await axios.get(url);
  return response.data; // full HTML of the page
};

