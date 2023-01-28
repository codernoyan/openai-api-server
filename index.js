const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.use('/openai', require('./routes/openaiApiRoutes'))

// default message
app.get('/', (req, res)=>{
  res.send('OpenAI API Server is running');
});

// listening app on server
app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});