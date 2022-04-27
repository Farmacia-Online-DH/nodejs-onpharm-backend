const express = require("express");
const app = express();
const consign = require("consign");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

app.use(express.json());
app.use(cors())

consign()
  .include("/api")
  .then("/routes")
  .into(app);

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
