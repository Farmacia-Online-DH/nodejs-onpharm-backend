const express = require("express");
const app = express();
const consign = require("consign");
const cors = require("cors");
require('dotenv').config()


app.use(express.json());
app.use(cors())

consign()
  .include("/api")
  .then("/middleware")
  .then("/routes")
  .into(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("App rodando na porta 3000");
});
