import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  slug: { type: String, required: true },
});

const Skills = mongoose.models.Skills || mongoose.model("Skills", skillsSchema);

module.exports = Skills;
