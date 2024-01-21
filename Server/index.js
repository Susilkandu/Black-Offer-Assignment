const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app= express();
// Configuration
require('dotenv').config();
app.use(cors());
const PORT= process.env.PORT;
app.use(express.json({limit:'2mb'}));

// Database Connection Establishation
const url=process.env.url;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database has been successfully Connected to the Server");
}).catch((error)=>{
    console.log(error);
})

// use routes
app.use(require("./routes/gDataRoutes"))

// Run Server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
