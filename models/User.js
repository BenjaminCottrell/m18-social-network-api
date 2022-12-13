const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      match: [/.+@.+\..+/, 'Must be a valid email address!'],
    },
    friends: [
      {
        type: Schema.Types.ObjectID,
        ref: 'User',
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', 
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// altered virtual from activity 21
userSchema.virtual('friendNumber').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);
// exporting User model
module.exports = User;
