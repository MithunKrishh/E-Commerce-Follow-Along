const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");






app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
      path: "backend/config/.env",
  });
}

// Allow CORS for Development Only
if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:5173' }));
}

// Import Routes
const user = require("./controller/user");
const product = require("./controller/product");

app.use("/api/v2/user", user);
app.use("/api/v2/product", product); 

// It's for Error Handling
app.use(ErrorHandler);

module.exports = app;
