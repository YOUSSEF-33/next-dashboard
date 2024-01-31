import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      require: true,
      unique: true,
      type: String,
      min: 6,
      max: 16,
    },
    firstName: {
      require: true,
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      require: true,
      unique: true,
      type: String,
    },
    password: {
      require: true,
      type: String,
      min: 8,
      max: 16,
    },
    country: {
      require: true,
      type: String,
    },
    address: {
      require: true,
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Users =  mongoose.models.Users||mongoose.model('Users', userSchema);