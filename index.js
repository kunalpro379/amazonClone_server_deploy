// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
//const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
//const productRouter = require("./routes/product");
//const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB="mongodb+srv://kunaldp379:Lawm2471@cluster123.q5php4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster123";


// middleware
app.use(express.json());
app.use(authRouter);
// app.use(adminRouter);
// app.use(productRouter);
// app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "192.168.121.227", () => {
  console.log(`connected at port ${PORT}`);
});