# Ecommerce Fullstack Design - Server

This is the backend server for the Ecommerce Fullstack Design project.

## Features

- RESTful API for products, users, orders, and categories
- User authentication and authorization (JWT)
- Product management (CRUD)
- Secure password handling
- Environment-based configuration
- Image upload with [Cloudinary](https://cloudinary.com/) and [Multer](https://github.com/expressjs/multer)

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT** for authentication
- **dotenv** for environment variables
- **Cloudinary** for image storage
- **Multer** for file uploads

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/ecommerce-fullstack-design.git
cd ecommerce-fullstack-design/server
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Running the Server

```bash
npm start
```

Server will run on `http://localhost:5000`.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/products` - List all products
- `POST /api/products` - Add a new product (admin)
- `POST /api/products/upload` - Upload product image (admin)
- `GET /api/orders` - List user orders

## Folder Structure

```
server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── uploads/
├── app.js
└── README.md
```

## License

MIT
