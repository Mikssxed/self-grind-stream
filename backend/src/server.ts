import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import habitsRoutes from "./routes/habitsRoutes";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/habits", habitsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
