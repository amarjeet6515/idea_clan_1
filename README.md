# NodeJS GraphQL Server
*Project Overview:*
Welcome to our GraphQL backend implementation using Node.js, Express.js, Apollo Server, and MongoDB.
This project aims to streamline the process of creating and retrieving posts, as well as managing user
registration and authentication through JWT tokens.

*Features:*
GraphQL API Endpoint: Access our GraphQL API via http://localhost:5050/graphql.
Post Management: Create, retrieve, and filter posts effortlessly.
User Authentication: Seamlessly handle user registration and authentication.
JWT Token Management: Generate and validate JWT tokens to manage user sessions securely.


*Folder Structure*

├── ...  
├── src                    
│   ├── configs/├── db.js MongoDB connection.  
│  
│   ├── models/ ├──  user.model.js: Mongoose model for users.     
│               └──  user.model.js: Mongoose model for users.  
│   └── GraphQL/├──  user.typeDefs.js: GraphQL type definitions for user operations.    
│               ├──  user.resolvers.js: Resolvers for user operations.    
│               ├──  posts.typeDefs.js: GraphQL type definitions for post operations.    
│               └──  posts.resolvers.js: Resolvers for post operations                
└── index.js : Server homepage.  

*Database Integration:*
MongoDB: Store posts and user information efficiently using MongoDB.
Mongoose ODM: Utilize Mongoose for smooth data modeling and interaction.

*GraphQL Endpoint:*
Access the GraphQL endpoint in your browser or client application

GraphQL Endpoint : http://localhost:5050/graphql

Use this endpoint to interact with the GraphQL server, execute queries, and perform mutations.

*Technologies Used:*
Node.js
Express.js
Apollo Server
GraphQL
MongoDB (with Mongoose)
JSON Web Tokens (JWT)
bcrypt for password hashing
dotenv for managing environment variables

*Deployed-link:*
https://idea-clan-11.onrender.com/
