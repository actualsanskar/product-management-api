# Product Management API

A CRUD-based backend API for managing products, built with Node.js, Express, and MongoDB. This API allows users to create, read, update, and delete product records.

## Features

- Create a new product
- Retrieve product details
- Update product information
- Delete a product
- RESTful API architecture

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/actualsanskar/product-management-api
   ```
2. Navigate to the project directory:
   ```sh
   cd product-management-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   Note: use mongoDB altas here to create a cluster and copy it's string
   ```env
   PORT=5000
   DATABASE_URL=your_database_connection_string
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

| Method | Endpoint       | Description         |
|--------|---------------|---------------------|
| POST   | `/api/products`   | Create a product   |
| GET    | `/api/products`   | Get all products   |
| PUT    | `/api/products/:id` | Update a product   |
| DELETE | `/api/products/:id` | Delete a product   |

## Technologies Used

- Node.js
- Express.js
- MongoDB
- RESTful API design

## Future Enhancements

- Create a frontend to interact with the API
- Implement authentication and authorization
- Add pagination for product listings


