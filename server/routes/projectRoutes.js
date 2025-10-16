import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

// ✅ Get all projects
router.get("/", getProjects);

// ✅ Get single project by ID (for Edit Project)
router.get("/:id", getProjectById);

// ✅ Add new project
router.post(
  "/",
  protect,
  upload.fields([
    { name: "images", maxCount: 20 },
    { name: "background", maxCount: 1 },
  ]),
  addProject
);

// ✅ Update existing project
router.put(
  "/:id",
  protect,
  upload.fields([
    { name: "images", maxCount: 20 },
    { name: "background", maxCount: 1 },
  ]),
  updateProject
);

// ✅ Delete project
router.delete("/:id", protect, deleteProject);

export default router;
