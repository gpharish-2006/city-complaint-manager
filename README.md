# ResolveNet – Smart Citizen Complaint Management System

ResolveNet is a full-stack complaint management platform where citizens can register complaints, track complaint status, upload issue images, and interact with an admin dashboard for complaint management.

The project is built using React, Express.js, MongoDB, and Node.js with JWT authentication.

Vercel : https://resolve-net.vercel.app/

Netlify : https://resolvenet.netlify.app/

---

# Features

## User Features

- User Registration & Login
- JWT Authentication
- Create Complaints
- Upload Complaint Images
- Track Complaint Status
- View Personal Complaints
- Profile Page
- Protected Routes
- Neon UI Design

---

## Admin Features

- Admin Dashboard
- View All Complaints
- Update Complaint Status
- Delete Complaints
- Complaint Statistics

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- CSS
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcryptjs

---

# Project Structure

## Frontend

```bash
client/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
```

## Backend

```bash
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── .env
└── server.mjs
```

---

# Installation & Setup

# 1. Clone Repository

```bash
git clone https://github.com/gpharish-2006/resolve-net.git
```

---

# 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

# Backend Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_DB=your_mongodb_connection_link       #either mongodb compass or mongodb atlas

JWT_SECRET=your_secret_key
```

Example:

```env
PORT=5000

MONGO_DB=mongodb://localhost:27017/resolve-net

JWT_SECRET=mysecretkey123
```

---

# Frontend Environment Variables

Create `.env` inside `client` folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Run Backend

```bash
cd server
npm run dev
```

---

# Run Frontend

```bash
cd client
npm run dev
```

---

# API Routes

## Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/me | Get User Profile |

---

## Complaint Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/complaints | Create Complaint |
| GET | /api/complaints/user | User Complaints |
| GET | /api/complaints/:complaintId | Track Complaint |

---

## Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/admin/complaints | Get All Complaints |
| PUT | /api/admin/complaints/:id | Update Complaint Status |
| DELETE | /api/admin/complaints/:id | Delete Complaint |

---

# Authentication

JWT token is stored in localStorage after login.

Protected Routes:
- Profile
- Complaints
- Create Complaint
- Track Complaint
- Admin Dashboard

---

# Image Upload

Complaint images are uploaded using Multer and stored inside:

```bash
server/uploads/
```

---