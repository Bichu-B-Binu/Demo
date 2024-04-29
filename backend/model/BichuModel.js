import mongoose from "mongoose";

const bichuSchem = mongoose.Schema({
  name: {
    type: String,
    requerd: true,
  },
  age: {
    type: Number,
    requerd: true,
  },
  password: {
    type: String,
    requerd: true,
  },
});

const BichuDetails = mongoose.model("BichuDetails", bichuSchem);
export default BichuDetails;
