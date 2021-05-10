require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const fileUploder = require("express-fileupload");
const cors = require("cors");
const path = require('path');
// connect to db
connectDB();

// routs
const auth = require("./routes/auth");
const dish = require("./routes/dish");

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUploder());

app.use("/api/auth", auth);
app.use("/api/dish", dish);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Have a error ${err}`);
  server.close(() => process.exit(1));
});
