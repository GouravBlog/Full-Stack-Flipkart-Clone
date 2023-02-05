import Product from "./Model/productSchema.js";
import { products } from "./data.js";

export const insertData = async () => {
  try {
    await Product.deleteMany();
    let data = Product.create(products);
    data = await data.save();
    console.log("data insert succesfully");
  } catch (error) {
    console.log("data not insert ");
  }
};
