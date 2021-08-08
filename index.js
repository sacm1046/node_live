const express = require("express");
const http = require("http");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const app = express();

const { PORT } = process.env;

//Routes
const productRoutes = require("./routes/products.route");

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(cors());

//Routes
const prefix = "/api/v2/";
app.use(prefix, productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my first API</h1>");
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`El servidor esta en el puerto ${PORT}`);
});
