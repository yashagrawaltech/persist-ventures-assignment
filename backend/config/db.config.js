import mongoose from "mongoose";

export const connectToMongoDB = async (URI) => {
  try {
    await mongoose.connect(URI).then(() => {
      console.log(
        `mongodb connected successfully at host ${mongoose.connection.host}`
      );
    });
  } catch (error) {
    throw new Error(`mongodb connection error: ${error}`);
  }
};
