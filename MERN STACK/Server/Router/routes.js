import express from "express";
const router = express.Router();
import { userSignup, userLogin } from "../Controllers/userSignup.js";
import {
  getProducts,
  getProductDetail,
} from "../Controllers/productController.js";

router.route("/signup").post(userSignup);
router.route("/login").post(userLogin);

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProductDetail);

export default router;
