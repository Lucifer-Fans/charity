import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["current", "upcoming", "completed"], required: true },
  type: { type: String, required: true }, // e.g., blood donation, food camp
  images: [{ url: String, position: String }], // position to place in details page
  backgroundImage: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", projectSchema);
