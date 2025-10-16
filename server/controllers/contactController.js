import Contact from "../models/Contact.js";

// Add new contact
export const addContact = async (req, res) => {
  const { name, email, number, message } = req.body;
  const contact = new Contact({ name, email, number, message });
  await contact.save();
  res.json({ message: "Thank you for contacting us" });
};

// Get all contacts (admin)
export const getContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
};

// Delete contact by ID (admin)
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    await contact.deleteOne();
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
