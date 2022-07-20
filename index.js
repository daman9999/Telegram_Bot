const express = require("express");
const app = express();
const onNewMessage = require('./routes/NewMessage');


// used for handling json data
app.use(express.json());

app.use("/",onNewMessage);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });