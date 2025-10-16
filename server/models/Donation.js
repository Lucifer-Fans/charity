import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  amount: { type: Number, required: true }, // Number for amount
  type: { type: String, required: true },
  receiptUrl: { type: String }, // optional
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Donation", donationSchema);
