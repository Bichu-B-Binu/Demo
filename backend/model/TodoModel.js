import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    requerd: true,
  },
  desc: {
    type: String,
    requerd: true,
  },
  status: {
    type: Boolean,
    requerd: true,
    default: false,
  },
});
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;

// const details
