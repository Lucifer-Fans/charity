import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// ✅ Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ NEW: Get single project by ID (for edit prefill)
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Add project
export const addProject = async (req, res) => {
  try {
    const { name, category, type } = req.body;
    let images = [];
    let backgroundImage = null;

    if (req.files && req.files.images) {
      for (let file of req.files.images) {
        const result = await cloudinary.uploader.upload(file.path);
        images.push({ url: result.secure_url, position: "default" });
        fs.unlinkSync(file.path);
      }
    }

    if (req.files && req.files.background && req.files.background[0]) {
      const bgFile = req.files.background[0];
      const result = await cloudinary.uploader.upload(bgFile.path);
      backgroundImage = result.secure_url;
      fs.unlinkSync(bgFile.path);
    }

    const project = new Project({
      name,
      category,
      type,
      images,
      backgroundImage,
    });

    await project.save();
    res.json({ message: "Project added successfully", project });
  } catch (err) {
    console.error("Error adding project:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, type } = req.body;

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Upload new images if provided
    if (req.files && req.files.images) {
      for (let file of req.files.images) {
        const result = await cloudinary.uploader.upload(file.path);
        project.images.push({ url: result.secure_url, position: "default" });
        fs.unlinkSync(file.path);
      }
    }

    // Upload new background if provided
    if (req.files && req.files.background && req.files.background[0]) {
      const bgFile = req.files.background[0];
      const result = await cloudinary.uploader.upload(bgFile.path);
      project.backgroundImage = result.secure_url;
      fs.unlinkSync(bgFile.path);
    }

    if (name) project.name = name;
    if (category) project.category = category;
    if (type) project.type = type;

    await project.save();
    res.json({ message: "Project updated successfully", project });
  } catch (err) {
    console.error("Error updating project:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Error deleting project:", err);
    res.status(500).json({ error: err.message });
  }
};
