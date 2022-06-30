const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
  {
    //min length, max length, required
    thoughtText: {
      type: String,

      required: 'Thought Needed',

      minlength: 1,

      maxlength: 280,
    },
    //makes date
    createdAt: {
      type: Date,

      default: Date.now,

      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,

      required: true,
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

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;