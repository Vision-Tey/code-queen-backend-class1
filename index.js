const express = require("express");
const connectDB = require("./db");

const cors = require('cors')
require('dotenv').config();
const userRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts")

const app = express();

app.use(express.json());
// Middleware to handle CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.send('Welcome to my posts api')
})

//routes
app.use('/user', userRoutes);
app.use('/posts', postsRoutes);

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

connectDB();
