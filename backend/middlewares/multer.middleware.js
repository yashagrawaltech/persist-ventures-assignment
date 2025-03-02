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

    // Return a Promise that resolves with the upload result
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) {
            return reject(new Error("Upload failed: " + error.message));
          }
          resolve(result);
        }
      );

      // Pipe the stream to Cloudinary
      stream.pipe(uploadStream);
    });
  } catch (error) {
    throw new Error("Upload failed: " + error.message);
  }
};