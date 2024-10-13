const express = require("express");
const connectDB = require("./config/db");
const webtoonRoutes = require("./routes/webtoonRoutes");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", require("./middleware/auth.js")); // Assuming you save the above code in `routes/auth.js`
app.use("/api", webtoonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
