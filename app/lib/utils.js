import mongoose from "mongoose";

const connection = {};
const url = process.env.MONGO_URL;
export const DBconnection = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(url);
    connection.isConnected =  db.connections[0].readyState;
  } catch (err) {
    return err;
    throw err; 
  }
};
