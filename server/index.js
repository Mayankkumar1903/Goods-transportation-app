const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const manuRoutes = require("./routes/manuRoutes");
const transRoutes = require("./routes/transRoutes");

//mongodb connection
connectDB();

//rest object
const  app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/manufacturer",manuRoutes);
app.use("/manufacturer",manuRoutes);
app.use("/transporter",transRoutes);
app.use("/transporter",transRoutes);

// Port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
      .white
  );
});