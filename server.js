const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttrackerdb", { useNewUrlParser: true , useUnifiedTopology: true });
const routes = require("./routes")

app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});