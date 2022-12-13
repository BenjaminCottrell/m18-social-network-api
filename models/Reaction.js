const { Schema, model } = require('mongoose');

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
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        return formatDate(date)
      },
      username: {
        type: String,
        required: true,
      }
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;