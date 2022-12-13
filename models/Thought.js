const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
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
      get: (date) => {
        return formatDate(date)
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('Thought, thoughtSchema')

module.exports = assignmentSchema;
