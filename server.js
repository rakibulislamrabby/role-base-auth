require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./modules/auth/authRoutes');
const postRoutes = require('./modules/post/postRoutes');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
