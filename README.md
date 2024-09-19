# Social Network API (Chit-Chat)

## Description

Chit-Chat is a social network API that allows users to share their thoughts, react to friends' thoughts, and manage a friend list. This project uses **Express.js** for routing, **MongoDB** as the database, and **Mongoose** for object data modeling (ODM). Users can create, update, and delete thoughts, add reactions, manage friends, and retrieve data via RESTful API endpoints.

### Features

- Users can create, update, and delete their profiles.
- Users can create, update, and delete thoughts.
- Users can add and delete reactions to thoughts.
- Users can add and remove friends.
- Timestamp formatting for user thoughts and reactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
  - [Friend Routes](#friend-routes)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone SSH Key
   
2. Navigate into the project directory:
    cd social-network-api

3. Install the necessary dependencies:
    npm install
4. Make sure MongoDB is running on your machine.
5. Create a .env file in the root of your project and add your MongoDB connection
6. Start the server and connect:
    npm start

## Usage
You can test this API using Insomnia, Postman, or any API testing tool. The routes are structured as RESTful endpoints.
    
### API Routes:

User Routes
HTTP Method	     Endpoint	                             Description
GET	             /api/users	                             Get all users
GET	             /api/users/:userId	                     Get a single user by ID
POST	         /api/users	                             Create a new user
PUT	             /api/users/:userId	                     Update a user by ID
DELETE	         /api/users/:userId	                     Delete a user by ID
POST	         /api/users/:userId/friends/:friendId	 Add a friend to user's friend list
DELETE	         /api/users/:userId/friends/:friendId	 Remove a friend from user's friend list

## Walkthrough Video: https://drive.google.com/file/d/1zWs4DeC9kLolT09siZRR4e_qzYpAmVy2/view?usp=sharing

## Technologies Used
Node.js: Server-side runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing user data and thoughts.
Mongoose: MongoDB object data modeling (ODM) for Node.js.
Insomnia/Postman: API testing tool for testing RESTful routes.

## License
This project is licensed under the MIT License.

## Resources and Cotributions:
Course material from the UT Austin Bootcamp was referenced throughout the NoSQL section. Chat GPT was used for troubleshooting thw thoughtController.js (debug for bracket placement and best practices). AI wasused for implementing The $addToSet operator which is used to add a new reaction to the reactions array of the thought. The new reaction is provided in the request body (req.body).

Accessed on 9/11, 9/14 and 9/18: https://www.mongodb.com/docs/drivers/node/current/ 