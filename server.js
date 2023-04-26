const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/user");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api", users);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
