# URL Shortener

A full-stack URL Shortener application with user authentication, dashboard, and analytics. Built with Node.js/Express (Backend) and React (Frontend).

## Features
- User registration and login
- Create short URLs from long URLs
- Dashboard to manage user URLs
- URL analytics (click tracking, etc.)
- RESTful API
- Modern React frontend (Vite)

## 🚀 Live Demo
👉 [Try the Website](https://url-shortner-ochre-phi.vercel.app/)   

## System Design  
  
<img width="1917" height="968" alt="Screenshot 2025-10-21 231345" src="https://github.com/user-attachments/assets/d6d9ea31-badc-44df-9936-3c1f441dc5ed" />
  

## Folder Structure
URL-SHORTNER  
│  
├── BACKEND/             
│   ├── src/  
│   │   ├── config/  
│   │   ├── controllers/   
│   │   ├── dao/          
│   │   ├── middleware/   
│   │   ├── model/        
│   │   ├── routes/       
│   │   ├── services/      
│   │   └── utils/        
│   ├── app.js             
│   └── .env              
│  
├── FRONTEND/             
│   ├── src/  
│   │   ├── api/         
│   │   ├── Components/    
│   │   ├── Pages/         
│   │   ├── routing/     
│   │   ├── store/        
│   │   └── utils/         
│   ├── App.jsx  
│   ├── index.html  
│   └── .env  
│  
├── README.md  
   
  
## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud)

---

## Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd BACKEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in `BACKEND/` with your MongoDB URI and JWT secret.
   - Example:
     ```env
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:5000` by default.

---

## Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd FRONTEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

---

## Usage
- Register a new user or log in.
- Create a short URL from the dashboard.
- Manage and track your URLs.

---

## Technologies Used
- **Backend:** Node.js, Express, MongoDB, JWT
- **Frontend:** React, Vite, Axios

---











