const express = require("express");
const app = express();
const { APP_PORT, DB_URL } = require("./config");
const routes = require("./routes");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions ={
  origin:"http://localhost:3000",
  methods:"GET,POST,DELETE,PATCH,PUT",
  credentials: true,
}


app.use(cors(corsOptions));
app.use(express.static(__dirname + "/public"));  // to make photo public
app.use("/uploads", express.static("uploads"));  // to make photo public

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

mongoose.connect(DB_URL).then(() => console.log("Connected!"));

app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`app ${APP_PORT}`);
});
