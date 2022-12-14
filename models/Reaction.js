const { Schema, model } = require('mongoose');

function formatDate(date) {
  return date.toLocaleDateString();
}

// Schema to create a reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
      },
      username: {
        type: String,
        required: true,
      }
    },
  
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
