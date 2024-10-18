const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./connection/index');
const router = require("./routes/index");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001; // Ensure PORT has a value

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router); // Ensure this comes after CORS setup

app.listen(PORT, async () => {
    console.log(`Server has started on port ${PORT}`);
    await connectDB();
});
