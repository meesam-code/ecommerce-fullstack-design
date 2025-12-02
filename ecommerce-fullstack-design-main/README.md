# Ecommerce Fullstack Design

A modern fullstack ecommerce application showcasing best practices in web development.

## Features

- Secure user authentication and role-based authorization
- Product catalog with advanced search and filtering
- Shopping cart with seamless checkout experience
- Order management dashboard for users and admins
- Image upload and management with Cloudinary
- Fully responsive and mobile-friendly UI

## Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Nodemon
- **Cloud Services:** Cloudinary (image storage)
- **Other Tools:** MERN stack, dotenv, CORS

## Folder Structure

### Backend (`/server`)

/server
│
├── .env # Environment variables (in root)
├── package.json # Project metadata and dependencies (in root)
│
└── src/
├── index.js # Main entry point (starts the server)
├── app.js # Express app setup (middleware, routes, etc.)
│
├── controllers/ # Route handler logic (auth, product, user, etc.)
├── routes/ # All API route definitions
├── models/ # Mongoose models (User, Product, Category, etc.)
├── middleware/ # Custom middleware (auth, error handler, upload)
├── utils/ # Utility functions (Cloudinary, AppError, etc.)
└── config/ # Database and external service configurations
└── README.md

### Frontend (`/client`)

```
client/
├── public/
├── src/
│   ├── api/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-fullstack-design.git
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd ecommerce-fullstack-design
   cd server
   npm install
   cd ../client
   npm install
   ```
3. Configure environment variables in `.env` files for both frontend and backend as needed (e.g., MongoDB URI, JWT secret, Cloudinary credentials).
4. Start the development servers:
   ```bash
   # In the server directory
   npm run dev
   # In the client directory (separate terminal)
   npm start
   ```

## License

This project is licensed under the MIT License.
