const express = require('express');
const cors = require('cors');
const PORT = 4000;
const connectDB = require('./database/db');
const taskRoute = require('./routes/todoRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

app.use('/api/v1', taskRoute);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
