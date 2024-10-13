
# Webtoon API

A RESTful API built with Node.js and Express for managing webtoons. This API supports CRUD operations, JWT-based authentication, and rate limiting for enhanced security. Input validation is done using Joi to ensure data integrity.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete webtoon entries.
- **JWT Authentication**: Secure endpoints using JSON Web Tokens.
- **Rate Limiting**: Limit API requests to prevent abuse.
- **Input Validation**: Ensure data integrity with Joi validation.
- **CORS Support**: Allow cross-origin requests for client applications.
- **Logging**: Use Morgan for request logging in development.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT)
- Joi for input validation
- Rate-limiter-flexible for rate limiting
- dotenv for environment variable management
- cors for enabling CORS
- morgan for logging HTTP requests

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RBZAHEER/webtoons-api.git
   cd webtoons-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your environment variables:

   ```plaintext
   PORT=5000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongo_database_uri
   ```

4. **Connect to MongoDB**: Ensure you have MongoDB running and replace `your_mongo_database_uri` with your actual MongoDB connection string.

## Usage

1. **Start the server**:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5000`.

2. **API Endpoints**:

   ### 1. Get All Webtoons
   - **Method**: `GET`
   - **Endpoint**: `http://localhost:5000/api/webtoons`
   - **Description**: Retrieve a list of all webtoons.

   ### 2. Add a New Webtoon
   - **Method**: `POST`
   - **Endpoint**: `http://localhost:5000/api/webtoons`
   - **Description**: Add a new webtoon.
   - **Request Body**:
     ```json
     {
         "title": "Webtoon Title",
         "description": "Description of the webtoon",
         "characters": ["Character 1", "Character 2"]
     }
     ```
   - **Authorization**: Requires JWT token in the header.
   - **Header**: 
     ```
     jwt: your_jwt_token
     ```

   ### 3. Get a Webtoon by ID
   - **Method**: `GET`
   - **Endpoint**: `http://localhost:5000/api/webtoons/:id`
   - **Description**: Retrieve a specific webtoon by its ID.
   - **URL Parameters**:
     - `id`: The ID of the webtoon to retrieve.

   ### 4. Delete a Webtoon by ID
   - **Method**: `DELETE`
   - **Endpoint**: `http://localhost:5000/api/webtoons/:id`
   - **Description**: Delete a specific webtoon by its ID.
   - **URL Parameters**:
     - `id`: The ID of the webtoon to delete.
   - **Authorization**: Requires JWT token in the header.
   - **Header**:
     ```
     jwt: your_jwt_token
     ```

3. **Testing with Postman**:

   - Use Postman to test API endpoints.
   - For protected routes (POST and DELETE), include the JWT token in the header:
     ```
     jwt: your_jwt_token
     ```

## Rate Limiting

To test the rate limiter, you can repeatedly call the API endpoints to see the restrictions in action. The rate limit is set in the `utils/rateLimiter.js` file.

## License

This project is licensed under License.

## Author

ZAHEER MULANI :)

