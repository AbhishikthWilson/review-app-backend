const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const reviews= require("./models/review")
const {reviewModel}= require("./models/review")

const app= express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abhishikth:achuMon0075@cluster0.38fgaky.mongodb.net/reviewDb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input= req.body
    let review= new reviewModel(input)
    review.save()
    console.log(review)
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
   reviewModel.find().then((data)=>{
    res.json(data)
   }).catch((error)=>{
    res.json(error)
   })
})

app.post("/search",(req,res)=>{
    let input= req.body
    reviewModel.find(input).then((data)=>{res.json(data)}).catch(()=>{
        res.json(error)
    })
})



app.listen(8080,()=>{
    console.log("server started")
})
