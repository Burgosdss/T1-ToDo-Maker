const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    text: String,
    done: {
      type: Boolean
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    date: {
      type: Date,
      default: new Date().toLocaleDateString()
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Todo", todoSchema);
