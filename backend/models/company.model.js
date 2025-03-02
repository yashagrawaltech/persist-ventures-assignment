import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
