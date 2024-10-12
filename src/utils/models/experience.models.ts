import mongoose from "@/utils/db/mongooseInstance";

const experienceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Experience must have a category"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Experience must have a title"],
      unique: true,
      trim: true,
    },
    src: {
      type: String,
      required: [true, "Experience must have an image source"],
    },
    content: {
      type: [String],
      required: [true, "Experience must have content details"],
    },
  },
  {
    collection: "experience",
  }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

module.exports = Experience;
