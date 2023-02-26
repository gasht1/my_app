import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      maxLength: 255,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 255,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
