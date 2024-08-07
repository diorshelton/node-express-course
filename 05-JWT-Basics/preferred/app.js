const express = require("express");
const app = express();
const pageRouter = require("./routes/main");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/", pageRouter);

const port = process.env.PORT || 3000;

app.listen(port)
console.log(`Server is listening on ${port}`);