const { Schema, model } = require("mongoose");
const reactionSchema = new Schema(
  {
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  { timestamps: true }
);

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
