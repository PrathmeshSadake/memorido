require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_URL = process.env.MONGO_URI;
mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log('💻 Mondodb Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Server working 🔥');
});
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => `Server running on port ${PORT} 🔥`);
