require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON ad form data response;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
// app.use(
//    cors({ credentials: true, origin: "https://reactgram-chi.vercel.app" })
// );
app.use(
   cors({
      origin: "https://reactgram-chi.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
   })
);

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB Connection
require("./config/db.js");

// routes
const router = require("./routes/router.js");

app.use(router);

app.listen(port, () => {
   console.log(`App rodando na porta ${port}`);
});
