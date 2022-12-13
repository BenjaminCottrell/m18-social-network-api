const users = [
  {
    "username": "Boba Fett",
    "email": "boba@bountyhunter.com",
    "friends": [],
    "thoughts": [],
    "__v": 0
  },
  {
    "username": "Han Solo",
    "email": "han@solo.com",
    "friends": [],
    "thoughts": [],
    "__v": 0
  },
  {
    "username": "Luke Skywalker",
    "email": "luke@jedi.com",
    "friends": [],
    "thoughts": [],
    "__v": 0
  }
];

const thoughts = [
  {
    "thoughtText": "Example thought by Han Solo",
    "username": "Han Solo",
    "createdAt": "2022-12-13T12:28:19.076+00:00",
    "reactions": [
      {
        "reactionBody": "Example reaction by Boba Fett",
        "username": "Boba Fett",
        "reactionId": "638083c9419ed0ed80903d95",
        "createdAt": "2022-12-13T12:28:19.076+00:00",
      }
    ],
    "__v": 0
  },
  {
    "thoughtText": "Example thought by Boba Fett",
    "username": "Boba Fett",
    "createdAt": "2022-12-13T12:28:19.076+00:00",
    "reactions": [
      {
        "reactionBody": "Example reaction by Han Solo",
        "username": "Han Solo",
        "reactionId": "6380840e419ed0ed80903d8c",
        "createdAt": "2022-12-13T12:28:19.076+00:00",
      }
    ],
    "__v": 0
  }
];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
