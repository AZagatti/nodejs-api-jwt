const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("../src/controllers/authController")(app);
require("../src/controllers/projectController")(app);

app.listen(3000);
