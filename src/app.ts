import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";
// import resumeRoutes from "./routes/resume.route";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

// ✅ Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ❌ Global error handler
app.use(errorHandler);

export default app;
