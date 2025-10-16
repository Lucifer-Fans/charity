import Donation from "../models/Donation.js";
import QRCode from "qrcode";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateTempQr = async (req, res) => {
  const { name, mobile, amount, type } = req.body;
  const upiUrl = `upi://pay?pa=${process.env.UPI_ID}&pn=CharityOrg&am=${amount}&cu=INR`;
  const qrCode = await QRCode.toDataURL(upiUrl);
  res.json({ message: "QR generated", qrCode });
};

export const addDonation = async (req, res) => {
  try {
    const { name, mobile, amount, type } = req.body;
    let receiptUrl = null;

    if (req.file) {
      receiptUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const donation = new Donation({ name, mobile, amount, type, receiptUrl });
    await donation.save();

    res.json({
      message: "Donation recorded successfully",
      donation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to record donation" });
  }
};


export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 });
    res.json(donations); // Each donation now includes receiptUrl if uploaded
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};
