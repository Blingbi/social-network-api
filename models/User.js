const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    //user schem/req
    username: {
      type: String,

      required: true,

      unique: true,

      trim: true,
    },
    //email check
    email: {
      type: String,

      required: true,

      unique: true,

      match: [/.+@.+\..+/, 'MatchIng Emails'],
    },
    //thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,

        ref: 'Thought',
      },
    ],
    //friend schema
    friends: [
      {
        type: Schema.Types.ObjectId,

        ref: 'User',
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
userSchema.virtual('friendCount').get(function () {
return this.friends.length;
});
const User = model('User', userSchema);
module.exports = User;