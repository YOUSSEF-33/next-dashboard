import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      require: true,
      unique: true,
      type: String,
      min: 6,
      max: 16,
    },
    desc: {
      require: true,
      type: String,
    },
    price: {
      type: Number,
      require: true,
    },
    isStoke: {
      type: Boolean,
      default: true,
    },
    count: {
      type: Number,
      min: 1,
      require: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);
