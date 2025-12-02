# Ecommerce Fullstack Design

This project is a fullstack ecommerce application built to deliver a seamless shopping experience for customers and efficient management tools for administrators.

## Features

- Secure user authentication and role-based authorization
- Product catalog with advanced search and filtering
- Shopping cart and streamlined checkout process
- Order history and tracking
- Admin dashboard for managing products, orders, and users
- Responsive UI for mobile and desktop

## Tech Stack

- **Frontend:** React.js, Context api, tailwind css
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens)
- **APIs:** RESTful endpoints

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-fullstack-design.git
   ```
2. Install dependencies for both client and server:
   ```bash
   cd ecommerce-fullstack-design/client
   npm install
   cd ../server
   npm install
   ```
3. Configure environment variables in `.env` files for both client and server as needed.

4. Start the development servers:

   ```bash
   # In one terminal
   cd server
   npm run dev

   # In another terminal
   cd client
   npm start
   ```

## Folder Structure

```
/client      # React frontend application
/server      # Node.js backend API
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
