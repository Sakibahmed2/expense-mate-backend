import express from "express";
import cors from "cors";
import { expensesRouter } from "./app/modules/expenses/expensesRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/expenses", expensesRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
