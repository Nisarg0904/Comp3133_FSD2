const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    const users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../UsersData.json"), "utf-8")
    );

    await User.insertMany(users);
    console.log("Users imported");
    process.exit();
  } catch (error) {
    console.error("Error importing users:", error);
    process.exit(1);
  }
};

importData();
