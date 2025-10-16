import express from "express";
import { addDonation, getDonations, generateTempQr } from "../controllers/donationController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.post("/temp", generateTempQr); // Generate QR without saving
router.post("/", upload.single("receipt"), addDonation); // Save donation with receipt
router.get("/", protect, getDonations);

export default router;
