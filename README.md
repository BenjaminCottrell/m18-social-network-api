<p id="readme-top"></p>

  [![License Badge](https://img.shields.io/badge/license-MIT-success?style=plastic)](https://choosealicense.com/licenses/mit/)

  # M18-Social-Network-API

  ## Description
  This project is a social network API. It is a backend database connected to a server, allowing the user to make GET, POST, PUT and DELETE requests. During this project I learned to:
  
  - Use a noSQL database with MongoDB
  - Utilize virtuals
  - Use several functions on one route
  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Questions](#questions)
  
  ## Installation
  
  - Clone the repo down to your local machine.
  - If you don't have Node.js, go to nodejs.org & download v16.18.0 or newer.
  - If you don't have MongoDB, go to mongodb.com & download.
  - If you don't have Insomnia, go to insomnia.rest & download Insomnia.
  - Open the directory in your terminal and run `npm i` .
  - Seed the database from the command line by running `npm run seed`
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Usage
  
   Open the terminal and enter `node server.js` or `npm start`
   
   Use `http://localhost:3001/api/users` for getting and adding users
   
   Use `http://localhost:3001/api/users/:userId` for getting single users, updating a user and deleting a user
    
   Use `http://localhost:3001/api/users/:userId/friends/:friendId` for adding and deleting friends
     
   Use `http://localhost:3001/api/thoughts` for getting and adding thoughts
   
   Use `http://localhost:3001/api/thoughts/:thoughtId` for getting single thoughts, updating a thought, and deleting a thought.
   
   Use `http://localhost:3001/api/thoughts/:thoughtId/reactions` for creating a reaction to a thought
   
   Use `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId` for deleting a reaction to a thought
   
  [Screencastify Video Demo](https://drive.google.com/file/d/1ltvsgKcFQW01VMBUP8CmOScqZjljFD9N/view)
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## License
  Copyright (c) [benjamincottrell](https://github.com/benjamincottrell). All rights reserved. 
  
Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Questions
  For any questions feel free to contact me via:
  - GitHub: [benjamincottrell](https://github.com/benjamincottrell)
  - Email: [bencottrell48@yahoo.com](mailto:bencottrell48@yahoo.com)
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
