import multer from "multer";
import cloudinary from "cloudinary";
import { config } from "dotenv";
import { Readable } from "stream";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer to use memory storage
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

// Function to upload to Cloudinary
export const uploadOnCloudinary = async (file) => {
  try {
    if (!file) return null;

    // Create a readable stream from the buffer
    const stream = new Readable();
    stream.push(file.buffer);
    stream.push(null); // Signal the end of the stream

    const response = await cloudinary.v2.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          throw new Error("Upload failed");
        }
        return result;
      }
    );

    // Pipe the stream to Cloudinary
    stream.pipe(response);

    return response;
  } catch (error) {
    throw new Error("Upload failed");
  }
};