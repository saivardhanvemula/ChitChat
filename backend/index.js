const express=require('express')
const dotenv=require("dotenv")
// const cors=requrire('cors')
// const { MongoClient } = require('mongodb')

const app=express()
dotenv.config();
// app.use(cors())
app.use(express.json())
const port =process.env.port

// const uri = 'mongodb://localhost:27017'
// const client = new MongoClient(uri)

app.get("/",(req,res)=>{
    res.send("This is backend server")
})


app.listen(port,()=>{console.log(`The server running on http://localhost:${port}/`)})