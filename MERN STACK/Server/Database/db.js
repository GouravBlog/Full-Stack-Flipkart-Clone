import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/flipkartdata";
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("database not connected ");
  }
};

export default connectDB;
