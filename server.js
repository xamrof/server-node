const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Express with HTML!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
