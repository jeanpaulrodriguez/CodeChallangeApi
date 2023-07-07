import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/server");
    console.log("Db is on");
  } catch (error) {
    console.log(error);
  }
};
