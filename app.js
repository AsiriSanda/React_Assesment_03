const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/User')
const post = require('./routes/Post')
const app = express()
const port = 4000

app.use(express.json())
app.use('/user', user)
app.use('/post', post)

const url = 'mongodb://localhost/fbClone'
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on("open",()=>{
    console.log("MongoDB connected!");
})



app.listen(port, ()=>{
    console.log(`app listening port ${port}`);
})
