import mongoose from "@/utils/db/mongooseInstance";

const projectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A project must have a title"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A project must have a description"],
    },
    imageSrc: {
      type: String,
      required: [true, "A project must have an image source"],
    },
    tryNowLink: {
      type: String,
      required: [true, "A project must have a try now link"],
    },
    iconLink: {
      type: String,
      required: [true, "A project must have an icon link"],
    },
    icon: {
      type: String,
      required: [true, "A project must have an icon"],
    },
  },
  {
    collection: "projects",
  }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

module.exports = Projects;
