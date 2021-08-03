const express = require("express");
const routes = require("./src/routes/crmRoutes");

const app = express();
const PORT = 4000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Node and Ехpress server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
