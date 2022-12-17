const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./routes")
const bodyParser = require("body-parser");
const app=express();
let port = 3000;
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const mongoAtlas = "mongodb+srv://venkatasubbamma:sudha1454@cluster0.ucznbbk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoAtlas,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to db")
})
app.listen(port, () => console.log(`App listening on port https://localhost:${port}`))
/* mongodb+srv://Jilanibasha:Jilanibasha23@cluster0.okfuzjh.mongodb.net/?retryWrites=true&w=majority" */