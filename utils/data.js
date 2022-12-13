const users = [
  {
    "username": "Boba Fett",
    "email": "boba@bountyhunter.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  },
  {
    "username": "Han Solo",
    "email": "han@solo.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  }
];

const thoughts = [
  {
    "thoughtText": "This is an example thought by Han Solo",
    "username": "Han Solo",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by Boba Fett",
        "username": "Boba Fett",
        "reactionId": "638083c9417ed0ed80903d82",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  },
  {
    "thoughtText": "This is an example thought by Boba Fett",
    "username": "Boba Fett",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by Han Solo",
        "username": "Han Solo",
        "reactionId": "6380840e417ed0ed80903d8a",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  }
];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
