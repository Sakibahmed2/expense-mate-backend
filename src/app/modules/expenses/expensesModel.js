import mongoose, { Schema } from "mongoose";

const expensesSchema = new Schema(
  {
    category: String,
    purpose: String,
    amount: Number,
    date: String,
  },
  {
    timestamps: true,
  }
);

export const Expenses = mongoose.model("Expenses", expensesSchema);
