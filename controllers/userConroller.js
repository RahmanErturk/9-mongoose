import * as Customer from "../models/userModel.js";

export const getAll = async (req, res) => {
  const customers = await Customer.getAll();
  res.json(customers);
};

export const create = async (req, res) => {
  const result = await Customer.create({ ...req.body });

  res.status(201).json(result);
};
