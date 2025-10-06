const express = require("express");
const connectDB = require("./db");

require('dotenv').config();
const userRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts")

const app = express();

app.use(express.json());

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
