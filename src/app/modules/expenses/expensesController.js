import sendResponse from "../../utils/sendResponse.js";
import { expensesServices } from "./expensesServices.js";

const createExpense = async (req, res) => {
  try {
    const data = req.body;

    const result = await expensesServices.createExpense(data);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Expense created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const result = await expensesServices.getAllExpenses();

    sendResponse(res, {
      success: true,
      message: "All expenses fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await expensesServices.getExpenseById(id);

    sendResponse(res, {
      success: true,
      message: "Expense fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await expensesServices.updateExpense(id, data);

    sendResponse(res, {
      success: true,
      message: "Expense updated successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await expensesServices.deleteExpense(id);

    sendResponse(res, {
      success: true,
      message: "Expense deleted successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const expensesController = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
