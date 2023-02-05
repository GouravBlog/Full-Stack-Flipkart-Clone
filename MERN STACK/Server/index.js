import express from "express";
const app = express();
const PORT = 8000;
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./Router/routes.js";
import connectDB from "./Database/db.js";
// import { insertData } from "./dataProvider.js";

// middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", Router);
app.get("/", (req, res) => {
  res.send("app is running");
});

connectDB();
app.listen(PORT, () => {
  console.log(`server is running at port number ${8000}`);
});

// insertData();
