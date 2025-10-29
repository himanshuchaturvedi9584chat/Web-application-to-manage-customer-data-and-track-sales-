import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  product: String,
  quantity: Number,
  price: Number,
  date: { type: Date, default: Date.now },
  invoiceUrl: String});
export default mongoose.model("Sale", saleSchema);
