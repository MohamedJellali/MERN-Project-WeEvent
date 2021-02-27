const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
//import routes
const authRouter = require("./routes/auth");
const eventRouter = require("./routes/eventRouter");
const addRouter = require("./routes/addRouter");
//middlewares
app.use(express.json());

//start the server
connectDB();

//Routes
app.use("/api/auth", authRouter);
app.use("/api/event", eventRouter);
app.use("/api", addRouter);

//launch the server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log("error while launch server", err)
    : console.log(`...The server is Running on http://localhost/${port}`);
});
