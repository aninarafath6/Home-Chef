require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require('./middleware/error')
// connect to db
connectDB();

// routs
const auth = require("./routes/auth");

// middleware
app.use(express.json());
app.use("/api/auth", auth);

// error handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Have a error ${err}`);
    server.close(()=>process.exit(1));
})