const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitness_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  
  const APIroutes = require("./routes/api");
  const HTMLroutes = require("./routes/html-routes");
  
  app.use(APIroutes);
  app.use(HTMLroutes);
  
  app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`);
  });
  