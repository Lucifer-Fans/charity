import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  number: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contactSchema);
