import mongoose from "mongoose";

const founderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Founder = mongoose.model("Founder", founderSchema);
