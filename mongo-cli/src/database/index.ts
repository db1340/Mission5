import mongoose from "mongoose";

export const initDB = () =>
  mongoose.connect("mongodb://0.0.0.0:27018/missionfive");
