import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRouter from "./routes/upload";
import videoRouter from "./routes/video";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRouter);
app.use("/api/video", videoRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
