import mongoose from "mongoose";

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  firm_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  major_customer: {
    type: Boolean,
  },
  total_sales: {
    type: Number,
  },
});

const Customer = mongoose.model("Customer", schema);

export const getAll = async () => {
  const customers = await Customer.find();
  return customers;
};

export const create = async (document) => {
  const newCustomer = new Customer(document);

  const result = await newCustomer.save();
  return result;
};
