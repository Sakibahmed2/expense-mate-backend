import { Router } from "express";
import { expensesController } from "./expensesController.js";

const router = Router();

router.post("/", expensesController.createExpense);

router.get("/", expensesController.getAllExpenses);

router.get("/:id", expensesController.getExpenseById);

router.put("/:id", expensesController.updateExpense);

router.delete("/:id", expensesController.deleteExpense);

export const expensesRouter = router;
