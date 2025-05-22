# Social-media-website

# 📱 Podia – Social Media App

**Podia** is a full-stack social media web application that allows users to create posts, leave comments, and interact with other users in a secure environment. The app uses **MySQL** for relational data storage, **React** for the frontend, **Node.js** and **Express** for the backend, and features secure authentication with **JWT** and **bcrypt**.

---

## 🚀 Features

- 📝 User Registration & Login (JWT-based authentication)
- 🔐 Passwords securely hashed using bcrypt
- 🧾 Create, Read, Update, Delete (CRUD) Posts
- 💬 Comment on Posts
- 👤 Protected routes for authenticated users
- 📦 RESTful API with Express

---

## 🛠️ Tech Stack

### Frontend
- React
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing

### Database
- MySQL
- Sequelize ORM

---

## 📂 Project Structure

/client → React frontend
/server → Node.js/Express backend
├── models → Sequelize models (User, Post, Comment)
├── routes → API routes (auth, posts, comments)
├── middleware → JWT auth middleware
└── config → DB config & environment variables

---

## 🔐 Authentication Flow

1. **User Signup/Login**: Passwords are hashed using **bcrypt**.
2. **JWT Token**: On successful login, a JWT token is issued.
3. **Protected Routes**: Users must attach the token in headers to access protected resources (e.g., creating a post).

---

## ⚙️ Getting Started

1. Clone the Repository
```bash
git clone https://github.com/your-username/podia.git

2. Setup Backend
bash
Copy
Edit
cd server
npm install

Create a .env file with:

ini

DB_NAME=podia_db
DB_USER=your_mysql_user
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
Run migrations & seed database (if needed)

bash

npx sequelize db:create
npx sequelize db:migrate

Start backend server:

bash

npm run dev


3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm start

📌 Future Enhancements
🔔 Real-time notifications

📸 Media uploads for posts

❤️ Like system and user profiles

🌐 Deploy to Vercel / Render / Railway

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Node.js & Express Docs

Sequelize Docs

React & React Router

JWT.io
