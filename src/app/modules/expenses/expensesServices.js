import { Expenses } from "./expensesModel.js";

const createExpense = async (data) => {
  try {
    const result = await Expenses.create(data);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getAllExpenses = async () => {
  try {
    const result = await Expenses.find();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getExpenseById = async (id) => {
  try {
    const result = await Expenses.findById(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (id, data) => {
  try {
    const result = await Expenses.findByIdAndUpdate(id, data, { new: true });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteExpense = async (id) => {
  try {
    const result = await Expenses.findByIdAndDelete(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const expensesServices = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
