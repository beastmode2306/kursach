const express = require("express");

const app = express();

app.use(express.json());

app.use("/orders", require("./routes/orders"));

app.listen(3000, () => {
  console.log("Order service listening on port 3000");
});
