const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require("./app/routes/product");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "1gb", strict: true }));
app.use(bodyParser.urlencoded({ limit: "1gb", extended: true }));

const db = require("./app/models");

db.sequelize
    .sync()
    .then(() => {
        console.log("Drop and re-sync database");
    })
    .catch((error) => {
        console.log(error, "error Shubham");
    });

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.use(productRoutes);

const port = parseInt(process.env.PORT, 10) || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
