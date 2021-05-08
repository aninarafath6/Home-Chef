require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

// routs
const auth = require("./routes/auth");

// middleware
app.use(express.json());
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
