import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewURlParser: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
