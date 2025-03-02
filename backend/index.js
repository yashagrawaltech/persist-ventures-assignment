import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToMongoDB } from "./config/db.config.js";

import adminRouter from "./routes/admin.routes.js"

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['https://persist-ventures-assignment-kappa.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// DB Config
connectToMongoDB(`${process.env.Mongo_URI}/${process.env.DB_NAME}`);

app.use("/admin", adminRouter)

app.listen(PORT, () => {
  console.log(`app is listening at port: ${PORT}`);
});
