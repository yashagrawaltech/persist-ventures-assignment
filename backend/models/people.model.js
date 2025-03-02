import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema(
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
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    initialFundingOffered: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const People = mongoose.model("People", peopleSchema);
