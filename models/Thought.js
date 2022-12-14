const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

function formatDate(date) {
  return date.toLocaleDateString();
}

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionNumber').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;
