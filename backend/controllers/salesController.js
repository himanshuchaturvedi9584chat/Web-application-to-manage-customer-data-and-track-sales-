import Sale from "../models/Sale.js";
import Customer from "../models/Customer.js";
import { generateInvoice } from "../utils/generateInvoice.js";

export const createSale = async (req, res) => {
  try {
    const sale = new Sale(req.body);
    const customer = await Customer.findById(sale.customer);
    const invoicePath = generateInvoice(sale, customer);
    sale.invoiceUrl = invoicePath;
    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
