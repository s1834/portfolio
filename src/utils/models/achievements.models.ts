import mongoose from "@/utils/db/mongooseInstance";

const achievementsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An achievement must have a title"],
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      required: [true, "An achievement must have content"],
    },
  },
  {
    collection: "achievements",
  }
);

const Achievements =
  mongoose.models.Achievements ||
  mongoose.model("Achievements", achievementsSchema);

module.exports = Achievements;
